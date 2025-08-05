from typing import Optional

from pydantic import UUID4, BaseModel, Field

from articles.constants import TITLE_MAX_LENGTH


class ArticleCreate(BaseModel):
    title: str = Field(max_length=TITLE_MAX_LENGTH)
    description: str
    
    
class ArticleView(BaseModel):
    oid: UUID4
    title: str
    description: Optional[str]
    