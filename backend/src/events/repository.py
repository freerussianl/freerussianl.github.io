from events.models import Event
from repository import BaseRepository


class EventsRepository(BaseRepository):
    model = Event
