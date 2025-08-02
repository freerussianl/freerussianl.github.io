from contextlib import asynccontextmanager
from fastapi import FastAPI

from api import api_router
from database import Database


@asynccontextmanager
async def lifespan(_: FastAPI):
    """Lifespan to database tables"""
    await Database.create_tables()

    yield


app = FastAPI(lifespan=lifespan)
app.include_router(api_router)
