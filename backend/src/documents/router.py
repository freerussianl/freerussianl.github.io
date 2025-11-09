from typing import List

from fastapi import APIRouter, Depends, File, UploadFile, status
from fastapi.responses import FileResponse
from pydantic import UUID4

from dependencies import CurrentUserDependency, get_current_user
from documents.dependencies import DocumentsServiceDependency
from documents.schemas import DocumentView
from documents.utils import get_file_path
from schemas import DefaultFilter

router = APIRouter()


@router.post("", response_model=DocumentView)
async def create_document(
    title: str,
    service: DocumentsServiceDependency,
    current_user: CurrentUserDependency,
    file: UploadFile = File(...),
):
    """Create a document"""
    document = await service.create_document(
        file=file, title=title, current_user=current_user
    )
    return document


@router.get("/{document_id}")
async def get_document(document_id: UUID4, service: DocumentsServiceDependency):
    document = await service.get_document_by_id(document_id=document_id)
    return FileResponse(
        path=get_file_path(document.name),
        headers={"Content-Disposition": "attachment;"},
    )


@router.get("", response_model=List[DocumentView])
async def get_documents(
    service: DocumentsServiceDependency, filter: DefaultFilter = Depends()
):
    documents = await service.get_documents(filter=filter)
    return documents


@router.delete(
    "/{document_id}", 
    response_model=None, 
    status_code=status.HTTP_204_NO_CONTENT,
    dependencies=[Depends(get_current_user)]
)
async def delete_event(
    document_id: UUID4,
    service: DocumentsServiceDependency,
):
    """Delete a document by its id"""
    await service.delete_document(document_id=document_id)
