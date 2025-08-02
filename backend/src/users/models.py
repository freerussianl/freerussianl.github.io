from sqlalchemy import Column, String
from database import Base


class User(Base):
    __tablename__ = "users"
    
    email = Column(String(64), nullable=False)
    password = Column(String, nullable=False)
    