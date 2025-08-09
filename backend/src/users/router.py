from fastapi import APIRouter, status
from pydantic import UUID4

from dependencies import CurrentUserDependency
from users.dependencies import UsersServiceDependency
from users.schemas import UserCreate, UserView

router = APIRouter()


@router.post(
    "",
    response_model=UserView,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(
    data: UserCreate,
    service: UsersServiceDependency,
    current_user: CurrentUserDependency,
):
    """Create a user"""
    user = await service.create_user(current_user=current_user, data=data)
    return user


@router.delete("/{user_id}", response_model=None, status_code=status.HTTP_202_ACCEPTED)
async def delete_user(
    user_id: UUID4, 
    service: UsersServiceDependency, 
    current_user: CurrentUserDependency
):
    """Delete a user"""
    await service.delete_user(current_user=current_user, user_id=user_id)
