import aiofiles
from fastapi import UploadFile

from config import settings


def get_file_path(name: str) -> str:
    return settings.documents.folder + f"/{name}"


async def save_document(file: UploadFile):
    file_path = get_file_path(file.filename)
    
    async with aiofiles.open(file_path, "wb") as out_file:
        content = await file.read()
        await out_file.write(content)
