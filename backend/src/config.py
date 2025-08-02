from pydantic import Field, SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


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
    database: DatabaseConfig = Field(default_factory=DatabaseConfig)


settings = Settings()
