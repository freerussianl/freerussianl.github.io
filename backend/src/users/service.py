from dataclasses import dataclass
from typing import Optional

from pydantic import UUID4, EmailStr

from auth.exceptions import ResourceNotFoundError
from auth.password import get_hashed_password
from unit_of_work import UnitOfWork
from users.enums import UserRole
from users.models import User
from users.schemas import UserCreate


@dataclass
class UsersService:
    uow: UnitOfWork

    async def create_user(self, *, current_user: User, data: UserCreate) -> User:
        if current_user.role != UserRole.ADMIN:
            raise ResourceNotFoundError()
        
        async with self.uow:
            data.password = get_hashed_password(data.password)
            user = await self.uow.users.create(data)
            await self.uow.commit()

            return user

    async def get_user_by_id(self, *, user_id: UUID4) -> User:
        async with self.uow:
            user = await self.uow.users.get(oid=user_id)
            return user

    async def get_user_by_email(self, *, email: EmailStr) -> Optional[User]:
        async with self.uow:
            user = await self.uow.users.get_by_email(email=email)
            return user

    async def delete_user(self, *, current_user: User, user_id: UUID4) -> None:
        if current_user.role != UserRole.ADMIN:
            raise ResourceNotFoundError()
        
        async with self.uow:
            await self.uow.users.delete(oid=user_id)
            await self.uow.commit()
