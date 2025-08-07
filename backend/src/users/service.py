from dataclasses import dataclass
from typing import Optional

from pydantic import UUID4, EmailStr

from unit_of_work import UnitOfWork
from users.models import User
from users.schemas import UserCreate


@dataclass
class UsersService:
    uow: UnitOfWork

    async def create_user(self, *, data: UserCreate) -> User:
        async with self.uow:
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
