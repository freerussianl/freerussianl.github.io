from typing import Type, Optional, List

from sqlalchemy import delete, desc, select, asc
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import UUID4, BaseModel

from schemas import DefaultFilter


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

    async def get_all(self, *, filter: DefaultFilter) -> List[object]:
        stmt = select(self.model)

        if filter.limit is not None:
            stmt = stmt.limit(filter.limit)

        if filter.offset is not None:
            stmt = stmt.offset(filter.offset)

        if filter.sort_by:
            column_attr = getattr(self.model, filter.sort_by, None)
            if column_attr is None:
                raise ValueError(
                    f"Model {self.model.__name__} has no attribute '{filter.sort_by}'"
                )

            stmt = stmt.order_by(
                desc(column_attr) if filter.sort_desc else asc(column_attr)
            )

        result = await self.session.execute(stmt)
        return result.scalars().all()

    async def delete(self, oid: UUID4) -> None:
        await self.session.execute(delete(self.model).where(self.model.oid == oid))
