from fastapi import APIRouter

from events.router import router as events_router

api_router = APIRouter(prefix="/api")

api_router.include_router(events_router, prefix="/events")
