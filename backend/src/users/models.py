
import uuid
from sqlalchemy import UUID, Column, String
from database import Base


class User(Base):
    __tablename__ = "users"
    
    oid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(64), nullable=False)
    password = Column(String, nullable=False)
    