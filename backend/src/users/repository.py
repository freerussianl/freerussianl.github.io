from repository import BaseRepository
from users.models import User


class UsersRepository(BaseRepository):
    model: User
