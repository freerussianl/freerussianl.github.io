from fastapi import APIRouter

from articles.router import router as articles_router
from events.router import router as events_router
from documents.router import router as documents_router
from users.router import router as users_router
from auth.router import router as auth_router

api_router = APIRouter(prefix="/api")

api_router.include_router(events_router, prefix="/events", tags=["Events"])
api_router.include_router(articles_router, prefix="/articles", tags=["Articles"])
api_router.include_router(documents_router, prefix="/documents", tags=["Documents"])
api_router.include_router(users_router, prefix="/users", tags=["Users"])
api_router.include_router(auth_router, prefix="/auth", tags=["Auth"])
