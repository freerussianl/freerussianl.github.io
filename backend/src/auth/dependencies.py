from typing import Annotated

from fastapi import Depends, Request

from auth.service import AuthService
from auth.token import get_email_from_token
from dependencies import UnitOfWorkDependency
from users.dependencies import UsersServiceDependency
from users.models import User


async def get_current_user(request: Request, service: UsersServiceDependency):
    """Get a current user from a request"""
    email = get_email_from_token(request)
    user = await service.get_user_by_email(email=email)
    return user


def get_auth_service(users_service: UsersServiceDependency, uow: UnitOfWorkDependency):
    service = AuthService(uow=uow, users_service=users_service)
    return service


CurrentUserDependency = Annotated[User, Depends(get_current_user)]
AuthServiceDependency = Annotated[AuthService, Depends(get_auth_service)]
