from typing import Annotated

from fastapi import Depends
from unit_of_work import UnitOfWork


def get_uow() -> UnitOfWork:
    return UnitOfWork()


UnitOfWorkDependency = Annotated[UnitOfWork, Depends(get_uow)]
