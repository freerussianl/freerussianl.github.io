from typing import Optional

from pydantic import EmailStr
from sqlalchemy import select

from repository import BaseRepository
from users.models import User


class UsersRepository(BaseRepository):
    model = User

    async def get_by_email(self, *, email: EmailStr) -> Optional[User]:
        user = await self.session.execute(
            select(self.model).where(self.model.email == email)
        )
        return user.scalar_one_or_none()
