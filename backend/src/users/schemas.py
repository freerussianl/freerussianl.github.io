from pydantic import UUID4, BaseModel, EmailStr

from users.enums import UserRole


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    role: UserRole
    
    
class UserView(BaseModel):
    oid: UUID4
    email: EmailStr
    role: UserRole