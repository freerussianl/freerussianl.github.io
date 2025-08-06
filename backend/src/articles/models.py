import uuid

from sqlalchemy import TIMESTAMP, UUID, Column, String, func

from articles.constants import TITLE_MAX_LENGTH
from database import Base


class Article(Base):
    __tablename__ = "articles"
    
    oid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(length=TITLE_MAX_LENGTH), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), default=func.now())
    link = Column(String, nullable=False)
    