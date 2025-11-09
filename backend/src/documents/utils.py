import asyncio
import os
import aiofiles
from fastapi import UploadFile

from config import settings


def get_file_path(name: str) -> str:
    return settings.documents.folder + f"/{name}"


async def save_document(file: UploadFile):
    file_path = get_file_path(file.filename)

    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    async with aiofiles.open(file_path, "wb") as out_file:
        content = await file.read()
        await out_file.write(content)


async def delete_file(file_name: str):
    file_path = get_file_path(file_name)
    await asyncio.to_thread(os.remove, file_path)
