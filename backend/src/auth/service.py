from dataclasses import dataclass

from auth.exceptions import InvalidCredentialsError
from auth.password import verify_password
from auth.schemas import AccessToken
from auth.token import create_token
from unit_of_work import UnitOfWork
from users.schemas import UserCredentials
from users.service import UsersService


@dataclass
class AuthService:
    uow: UnitOfWork
    users_service: UsersService

    async def login(self, *, credentials: UserCredentials) -> AccessToken:
        user = await self.users_service.get_user_by_email(email=credentials.email)

        if not user:
            raise InvalidCredentialsError()

        if not verify_password(credentials.password, user.password):
            raise InvalidCredentialsError()

        access_token = create_token(data={"sub": user.email})
        return AccessToken(access_token=access_token)
