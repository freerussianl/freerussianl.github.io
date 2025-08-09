from typing import Annotated

from fastapi import Depends

from auth.service import AuthService
from dependencies import UnitOfWorkDependency
from users.dependencies import UsersServiceDependency


def get_auth_service(users_service: UsersServiceDependency, uow: UnitOfWorkDependency):
    service = AuthService(uow=uow, users_service=users_service)
    return service


AuthServiceDependency = Annotated[AuthService, Depends(get_auth_service)]
