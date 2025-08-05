from datetime import datetime

from pydantic import UUID4, BaseModel


class EventBase(BaseModel):
    title: str
    description: str
    date: datetime


class EventView(EventBase):
    oid: UUID4
    created_at: datetime


class EventCreate(EventBase):
    ...
    