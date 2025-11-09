from typing import Annotated, Any

from pydantic import AnyUrl, BeforeValidator, Field, SecretStr, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict

from constants import DEFAULT_DOCUMENTS_PATH


def parse_cors(v: Any) -> list[str] | str:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list | str):
        return v
    raise ValueError(v)


class BaseConfig(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../../.env",
        env_ignore_empty=True,
        extra="ignore",
    )
    
class AuthConfig(BaseConfig):
    JWT_SECRET_KEY: SecretStr
    JWT_ALGORITHM: str
    TOKEN_EXPIRATION_MINUTES: int = 60
    
    
class DocumentsConfig(BaseConfig):
    model_config = SettingsConfigDict(env_prefix="DOCUMENTS_")
    
    folder: str = DEFAULT_DOCUMENTS_PATH
    
    
class DatabaseConfig(BaseConfig):
    model_config = SettingsConfigDict(env_prefix="DB_")

    PORT: int
    HOST: str
    NAME: str
    PASSWORD: SecretStr
    USER: str

    @property
    def url(self) -> str:
        return "postgresql+asyncpg://{}:{}@{}:{}/{}".format(
            self.USER,
            self.PASSWORD.get_secret_value(),
            self.HOST,
            self.PORT,
            self.NAME,
        )


class Settings(BaseConfig):
    BACKEND_CORS_ORIGINS: Annotated[
        list[AnyUrl] | str, BeforeValidator(parse_cors)
    ] = []
    FRONTEND_HOST: str = "http://localhost:5173"
    
    auth: AuthConfig = Field(default_factory=AuthConfig)
    database: DatabaseConfig = Field(default_factory=DatabaseConfig)
    documents: DocumentsConfig = Field(default_factory=DocumentsConfig)

    @computed_field
    @property
    def all_cors_origins(self) -> list[str]:
        cors = [str(origin).rstrip("/") for origin in self.BACKEND_CORS_ORIGINS]
        return cors + [self.FRONTEND_HOST]


settings = Settings()
