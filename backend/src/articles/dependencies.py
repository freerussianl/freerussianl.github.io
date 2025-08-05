from typing import Annotated

from fastapi import Depends

from articles.service import ArticlesService
from dependencies import UnitOfWorkDependency


def get_articles_service(uow: UnitOfWorkDependency) -> ArticlesService:
    return ArticlesService(uow=uow)


ArticlesServiceDependency = Annotated[ArticlesService, Depends(get_articles_service)]
