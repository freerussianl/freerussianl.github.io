from datetime import datetime

from pydantic import UUID4, BaseModel, Field, HttpUrl

from articles.constants import TITLE_MAX_LENGTH


class ArticleCreate(BaseModel):
    title: str = Field(max_length=TITLE_MAX_LENGTH)
    link: str
    
    
class ArticleView(BaseModel):
    oid: UUID4
    title: str
    created_at: datetime
    link: HttpUrl
    