from pydantic import UUID4, BaseModel, EmailStr

from users.enums import UserRole


class UserCredentials(BaseModel):
    email: EmailStr
    password: str
    
    
class UserCreate(UserCredentials):
    role: UserRole
    
    
class UserView(BaseModel):
    oid: UUID4
    email: EmailStr
    role: UserRole
    