from dataclasses import dataclass
from typing import List

from pydantic import UUID4

from articles.models import Article
from articles.schemas import ArticleCreate
from auth.exceptions import ResourceNotFoundError
from dependencies import CurrentUserDependency
from schemas import DefaultFilter
from unit_of_work import UnitOfWork
from users.enums import UserRole


@dataclass
class ArticlesService:
    uow: UnitOfWork

    async def create_article(
        self, *, data: ArticleCreate, current_user: CurrentUserDependency
    ) -> Article:
        if current_user.role != UserRole.ADMIN:
            raise ResourceNotFoundError()

        async with self.uow:
            article = await self.uow.articles.create(data)
            await self.uow.commit()

            return article

    async def get_article_by_id(self, *, article_id: UUID4) -> Article:
        async with self.uow:
            article = await self.uow.articles.get(article_id)
            return article

    async def get_articles(self, *, filter: DefaultFilter) -> List[Article]:
        async with self.uow:
            articles = await self.uow.articles.get_all(filter=filter)
            return articles

    async def delete_article(
        self, *, article_id: UUID4, current_user: CurrentUserDependency
    ) -> None:
        if current_user.role != UserRole.ADMIN:
            raise ResourceNotFoundError()
        
        async with self.uow:
            await self.uow.articles.delete(article_id)
            await self.uow.commit()
