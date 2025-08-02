from typing import List
from fastapi import APIRouter, status
from pydantic import UUID4

from events.dependencies import EventsServiceDependency
from events.schemas import EventCreate, EventView

router = APIRouter()


@router.post("", response_model=EventView, status_code=status.HTTP_201_CREATED)
async def create_event(data: EventCreate, service: EventsServiceDependency):
    """Create an event"""
    event = await service.create_event(data=data)
    return event


@router.get("/{event_id}", response_model=EventView, status_code=status.HTTP_200_OK)
async def get_event(event_id: UUID4, service: EventsServiceDependency):
    """Get events"""
    event = await service.get_event(event_id=event_id)
    return event


@router.get("", response_model=List[EventView], status_code=status.HTTP_200_OK)
async def get_events(service: EventsServiceDependency):
    """Get events"""
    events = await service.get_events()
    return events


@router.delete(
    "/{event_id}", response_model=None, status_code=status.HTTP_204_NO_CONTENT
)
async def delete_event(event_id: UUID4, service: EventsServiceDependency):
    """Get events"""
    await service.delete_event(event_id=event_id)
