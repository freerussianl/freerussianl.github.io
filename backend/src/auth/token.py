from datetime import datetime, timedelta
from typing import Optional

from fastapi import Request
import jwt

from auth.exceptions import ExpiredTokenError, InvalidTokenError
from config import settings


def create_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()

    if expires_delta:
        expire = datetime.now() + expires_delta
    else:
        expire = datetime.now() + timedelta(minutes=15)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode,
        settings.auth.JWT_SECRET_KEY.get_secret_value(),
        algorithm=settings.auth.JWT_ALGORITHM,
    )
    return encoded_jwt


def decode_token(token: str) -> dict:
    try:
        payload = jwt.decode(
            token,
            settings.auth.JWT_SECRET_KEY.get_secret_value(),
            algorithms=[settings.auth.JWT_ALGORITHM],
        )
        return payload
    except jwt.ExpiredSignatureError:
        raise ExpiredTokenError()
    except jwt.InvalidTokenError:
        raise InvalidTokenError()


def get_email_from_token(request: Request) -> str:
    """Get a user email from a request"""
    token = request.cookies.get('token')
    payload = decode_token(token)
    
    return payload['sub']
