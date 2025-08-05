from fastapi import APIRouter

from auth.dependencies import CurrentUserDependency

router = APIRouter()


@router.get('/me')
async def get_current_user(user: CurrentUserDependency):
    return user
