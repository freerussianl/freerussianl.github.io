import uuid
from sqlalchemy import TIMESTAMP, UUID, Column, String, Text, func
from database import Base


class Document(Base):
    __tablename__ = "documents"
    
    oid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    title = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), default=func.now())
    