import uuid

from sqlalchemy import UUID, Column, String, Text

from articles.constants import TITLE_MAX_LENGTH
from database import Base


class Article(Base):
    __tablename__ = "articles"
    
    oid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(length=TITLE_MAX_LENGTH), nullable=False)
    description = Column(Text, nullable=True)
    