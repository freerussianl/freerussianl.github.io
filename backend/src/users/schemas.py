from pydantic import UUID4, BaseModel, EmailStr


class UserView(BaseModel):
    oid: UUID4
    email: EmailStr
