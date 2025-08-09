from typing import Annotated

from fastapi import Depends, Request
from auth.exceptions import InvalidTokenError
from auth.token import get_email_from_token
from unit_of_work import UnitOfWork
from users.models import User


def get_uow() -> UnitOfWork:
    return UnitOfWork()


UnitOfWorkDependency = Annotated[UnitOfWork, Depends(get_uow)]


async def get_current_user(request: Request, uow: UnitOfWorkDependency):
    """Get a current user from a request"""
    email = get_email_from_token(request)
    async with uow:
        user = await uow.users.get_by_email(email=email)
        if not user: 
            raise InvalidTokenError()
        return user


CurrentUserDependency = Annotated[User, Depends(get_current_user)]
