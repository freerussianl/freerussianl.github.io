from typing import Annotated
from fastapi import Depends, Request

from auth.token import get_email_from_token
from users.dependencies import UsersServiceDependency
from users.models import User


async def get_current_user(request: Request, service: UsersServiceDependency):
    """Get a current user from a request"""
    email = get_email_from_token(request)
    user = await service.get_user_by_email(email=email)
    return user


CurrentUserDependency = Annotated[User, Depends(get_current_user)]
