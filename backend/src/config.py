from typing import Annotated, Any

from pydantic import AnyUrl, BeforeValidator, Field, SecretStr, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict


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
    
    database: DatabaseConfig = Field(default_factory=DatabaseConfig)
    
    @computed_field
    @property
    def all_cors_origins(self) -> list[str]:
        cors = [str(origin).rstrip("/") for origin in self.BACKEND_CORS_ORIGINS]
        return cors + [self.FRONTEND_HOST]


settings = Settings()
