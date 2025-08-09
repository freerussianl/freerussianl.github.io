from dataclasses import dataclass
from typing import List

from fastapi import UploadFile
from pydantic import UUID4

from auth.exceptions import ResourceNotFoundError
from dependencies import CurrentUserDependency
from documents.models import Document
from documents.schemas import DocumentCreate
from documents.utils import save_document
from schemas import DefaultFilter
from unit_of_work import UnitOfWork
from users.enums import UserRole


@dataclass
class DocumentsService:
    uow: UnitOfWork

    async def create_document(
        self, *, file: UploadFile, title: str, current_user: CurrentUserDependency
    ) -> Document:
        if current_user.role != UserRole.ADMIN:
            raise ResourceNotFoundError()
        
        async with self.uow:
            data = DocumentCreate(name=file.filename, title=title)
            document = await self.uow.documents.create(data)

            await save_document(file)
            await self.uow.commit()

            return document

    async def get_document_by_id(self, *, document_id: UUID4) -> Document:
        async with self.uow:
            document = await self.uow.documents.get(oid=document_id)
            return document

    async def get_documents(self, *, filter: DefaultFilter) -> List[Document]:
        async with self.uow:
            documents = await self.uow.documents.get_all(filter=filter)
            return documents
