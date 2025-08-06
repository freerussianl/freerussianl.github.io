from typing import List

from fastapi import APIRouter, Depends, File, UploadFile
from fastapi.responses import FileResponse
from pydantic import UUID4

from documents.dependencies import DocumentsServiceDependency
from documents.schemas import DocumentView
from documents.utils import get_file_path
from schemas import DefaultFilter

router = APIRouter()


@router.post('', response_model=DocumentView)
async def create_document(
    title: str,
    service: DocumentsServiceDependency,
    file: UploadFile = File(...),
):
    """Create a document"""
    document = await service.create_document(file=file, title=title)
    return document


@router.get('/{document_id}')
async def get_document(document_id: UUID4, service: DocumentsServiceDependency):
    document = await service.get_document_by_id(document_id=document_id)
    return FileResponse(path=get_file_path(document.name), headers={"Content-Disposition": 'attachment;'})


@router.get('', response_model=List[DocumentView])
async def get_documents(
    service: DocumentsServiceDependency, filter: DefaultFilter = Depends()
):
    documents = await service.get_documents(filter=filter)
    return documents
