from datetime import datetime

from pydantic import UUID4, BaseModel


class EventBase(BaseModel):
    title: str
    date: datetime
    link: str


class EventView(EventBase):
    oid: UUID4
    created_at: datetime


class EventCreate(EventBase):
    ...
    