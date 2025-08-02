from exceptions import NotFoundException


OBJECT_NAME = "event"


class EventNotFoundException(NotFoundException):
    def __init__(self, object_name: str = OBJECT_NAME):
        super().__init__(object_name)
        