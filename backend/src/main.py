from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import api_router
from config import settings
from database import Database
from unit_of_work import UnitOfWork
from users.service import UsersService


@asynccontextmanager
async def lifespan(_: FastAPI):
    """Lifespan to database tables"""
    await Database.create_tables()

    uow = UnitOfWork()
    service = UsersService(uow=uow)
    
    super_user = await service.get_user_by_email(
        email=settings.auth.SUPER_USER_EMAIL
    )
    if not super_user:
        await service.create_super_user(
            email=settings.auth.SUPER_USER_EMAIL, 
            password=settings.auth.SUPER_USER_PASSWORD.get_secret_value(),
        )
        
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.all_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)