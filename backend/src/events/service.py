from dataclasses import dataclass
from typing import List, Optional

from pydantic import UUID4

from events.exceptions import EventNotFoundException
from events.models import Event
from events.schemas import EventCreate
from schemas import DefaultFilter
from unit_of_work import UnitOfWork


@dataclass
class EventsService:
    uow: UnitOfWork

    async def create_event(self, *, data: EventCreate) -> Event:
        async with self.uow:
            event = await self.uow.events.create(data)
            await self.uow.commit()

            return event

    async def get_event(self, *, event_id: UUID4) -> Event:
        async with self.uow:
            event = await self.uow.events.get(oid=event_id)
            if not event:
                raise EventNotFoundException()
            
            return event

    async def get_events(self, *, filter: DefaultFilter) -> List[Optional[Event]]:
        async with self.uow:
            events = await self.uow.events.get_all(filter=filter)
            return events

    async def delete_event(self, *, event_id: UUID4) -> None:
        async with self.uow:
            await self.uow.events.delete(oid=event_id)
            await self.uow.commit()
