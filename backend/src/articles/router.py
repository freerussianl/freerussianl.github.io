from typing import List

from fastapi import APIRouter, status
from pydantic import UUID4

from articles.dependencies import ArticlesServiceDependency
from articles.schemas import ArticleCreate, ArticleView

router = APIRouter()


@router.post(
    "",
    response_model=ArticleView,
)
async def create_article(data: ArticleCreate, service: ArticlesServiceDependency):
    """Create an article"""
    article = await service.create_article(data=data)
    return article


@router.get("", response_model=List[ArticleView], status_code=status.HTTP_200_OK)
async def get_articles(service: ArticlesServiceDependency):
    """Get articles"""
    articles = await service.get_articles()
    return articles


@router.get(
    "/{article_id}", response_model=ArticleView, status_code=status.HTTP_200_OK
)
async def get_article(article_id: UUID4, service: ArticlesServiceDependency):
    """Get articles"""
    articles = await service.get_article_by_id(article_id=article_id)
    return articles


@router.delete(
    "/{article_id}", response_model=None, status_code=status.HTTP_202_ACCEPTED
)
async def delete_article(article_id: UUID4, service: ArticlesServiceDependency):
    """Get articles"""
    await service.delete_article(article_id=article_id)
