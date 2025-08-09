from typing import List

from fastapi import APIRouter, status, Depends

from pydantic import UUID4

from dependencies import CurrentUserDependency
from events.dependencies import EventsServiceDependency
from events.schemas import EventCreate, EventView
from schemas import DefaultFilter

router = APIRouter()


@router.post("", response_model=EventView, status_code=status.HTTP_201_CREATED)
async def create_event(
    data: EventCreate,
    service: EventsServiceDependency,
    current_user: CurrentUserDependency,
):
    """Create an event"""
    event = await service.create_event(data=data, current_user=current_user)
    return event


@router.get("/{event_id}", response_model=EventView, status_code=status.HTTP_200_OK)
async def get_event(event_id: UUID4, service: EventsServiceDependency):
    """Get events"""
    event = await service.get_event(event_id=event_id)
    return event


@router.get("", response_model=List[EventView], status_code=status.HTTP_200_OK)
async def get_events(
    service: EventsServiceDependency, filter: DefaultFilter = Depends()
):
    """Get events"""
    events = await service.get_events(filter=filter)
    return events


@router.delete(
    "/{event_id}", response_model=None, status_code=status.HTTP_204_NO_CONTENT
)
async def delete_event(
    event_id: UUID4,
    service: EventsServiceDependency,
    current_user: CurrentUserDependency,
):
    """Get events"""
    await service.delete_event(event_id=event_id, current_user=current_user)
