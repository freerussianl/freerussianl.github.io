from typing import Any

from fastapi import HTTPException, status

INVALID_CREDENTIALS_DETAIL = "Incorrect username or password"
TOKEN_ERROR_DETAIL = "Not authenticated"
TOKEN_EXPIRED_DETAIL = "Token expired"
INVALID_TOKEN_DETAIL = "Invalid token"

DEFAULT_AUTH_HEADER = {"WWW-Authenticate": "Bearer"}


class TokenError(HTTPException):
    def __init__(
        self,
        *,
        detail: str = TOKEN_ERROR_DETAIL,
        headers: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=detail,
            headers=headers or DEFAULT_AUTH_HEADER,
        )


class InvalidCredentialsError(TokenError):
    def __init__(self) -> None:
        super().__init__(detail=INVALID_CREDENTIALS_DETAIL)


class ExpiredTokenError(TokenError):
    def __init__(self) -> None:
        super().__init__(detail=TOKEN_EXPIRED_DETAIL)


class InvalidTokenError(TokenError):
    def __init__(self) -> None:
        super().__init__(detail=INVALID_TOKEN_DETAIL)
