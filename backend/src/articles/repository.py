from articles.models import Article
from repository import BaseRepository


class ArticlesRepository(BaseRepository):
    model = Article
    