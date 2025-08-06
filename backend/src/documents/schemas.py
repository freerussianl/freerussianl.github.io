from datetime import datetime

from pydantic import UUID4, BaseModel



class DocumentBase(BaseModel):
    title: str
    name: str


class DocumentCreate(DocumentBase):
    ...
    

class DocumentView(DocumentBase):
    oid: UUID4
    created_at: datetime
