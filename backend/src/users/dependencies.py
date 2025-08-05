from typing import Annotated

from fastapi import Depends

from dependencies import UnitOfWorkDependency
from users.service import UsersService


def get_users_service(uow: UnitOfWorkDependency) -> UsersService:
    return UsersService(uow=uow)


UsersServiceDependency = Annotated[UsersService, Depends(get_users_service)]
