from fastapi import APIRouter, status

from auth.dependencies import AuthServiceDependency
from auth.schemas import AccessToken
from users.schemas import UserCredentials

router = APIRouter()


@router.post("/token", response_model=AccessToken, status_code=status.HTTP_201_CREATED)
async def create_token(credentials: UserCredentials, service: AuthServiceDependency):
    """Create a token"""
    token = await service.login(credentials=credentials)
    return token
