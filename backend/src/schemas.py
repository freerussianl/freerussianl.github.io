from pydantic import BaseModel

from constants import DEFAULT_LIMIT, DEFAULT_OFFSET, DEFAULT_SORT_BY, DEFAULT_SORT_DESC


class DefaultFilter(BaseModel):
    limit: int = DEFAULT_LIMIT
    offset: int = DEFAULT_OFFSET
    sort_by: str = DEFAULT_SORT_BY
    sort_desc: bool = DEFAULT_SORT_DESC
