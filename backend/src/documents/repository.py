from documents.models import Document
from repository import BaseRepository


class DocumentsRepository(BaseRepository):
    model = Document
    