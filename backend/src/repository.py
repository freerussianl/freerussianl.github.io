from typing import Type, Optional, List

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import UUID4, BaseModel


class BaseRepository:
    model: Type[object] = None

    def __init__(self, session: AsyncSession):
        self.session = session

    async def create(self, data: BaseModel) -> object:
        obj = self.model(**data.model_dump())
        self.session.add(obj)
        await self.session.flush()
        return obj

    async def get(self, oid: UUID4) -> Optional[object]:
        result = await self.session.execute(
            select(self.model).where(self.model.oid == oid)
        )
        return result.scalar_one_or_none()

    async def get_all(self) -> List[object]:
        result = await self.session.execute(select(self.model))
        return result.scalars().all()

    async def delete(self, oid: UUID4) -> None:
        await self.session.execute(delete(self.model).where(self.model.oid == oid))
