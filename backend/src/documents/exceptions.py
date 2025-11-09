from exceptions import NotFoundException

OBJECT_NAME = "document"


class DocumentNotFoundError(NotFoundException):
    def __init__(self, object_name: str = OBJECT_NAME):
        super().__init__(object_name)
