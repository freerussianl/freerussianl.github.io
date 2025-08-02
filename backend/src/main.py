from contextlib import asynccontextmanager
from fastapi import FastAPI

from database import Database


app = FastAPI()


@asynccontextmanager
async def lifespan(_: FastAPI):
    """Lifespan to database tables"""
    await Database.create_tables()
    
    yield
