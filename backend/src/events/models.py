import uuid

from sqlalchemy import TIMESTAMP, UUID, Column, String, Text, func

from database import Base


class Event(Base):
    __tablename__ = "events"

    oid = Column(UUID(as_uuid=True), default=uuid.uuid4, primary_key=True)
    title = Column(String(length=128), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(TIMESTAMP(timezone=True), default=func.now())
    date = Column(TIMESTAMP(timezone=True), nullable=False)
