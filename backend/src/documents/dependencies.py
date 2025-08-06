from typing import Annotated

from fastapi import Depends
from dependencies import UnitOfWorkDependency
from documents.service import DocumentsService


def get_documents_service(uow: UnitOfWorkDependency) -> DocumentsService:
    service = DocumentsService(uow=uow)
    return service


DocumentsServiceDependency = Annotated[DocumentsService, Depends(get_documents_service)]
