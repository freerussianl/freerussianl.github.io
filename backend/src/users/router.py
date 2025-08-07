from fastapi import APIRouter, status

from auth.dependencies import CurrentUserDependency
from users.dependencies import UsersServiceDependency
from users.schemas import UserCreate, UserView

router = APIRouter()


@router.post('', response_model=UserView, status_code=status.HTTP_201_CREATED)
async def create_user(data: UserCreate, service: UsersServiceDependency):
    user = await service.create_user(data=data)
    return user

    
@router.get('/me')
async def get_current_user(user: CurrentUserDependency):
    return user
