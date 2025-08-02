from typing import Annotated

from fastapi import Depends
from dependencies import UnitOfWorkDependency
from events.service import EventsService


def get_events_service(uow: UnitOfWorkDependency) -> EventsService:
    return EventsService(uow=uow)


EventsServiceDependency = Annotated[EventsService, Depends(get_events_service)]
