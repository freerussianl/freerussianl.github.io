from fastapi import HTTPException, status

ALREADY_EXISTS_TEMPLATE = "The {} already exists"
NOT_FOUND_TEMPLATE = "The {} was not found"
NO_FIELDS_PROVIDED_TEMPLATE = "No fields were provided to update the {}"


class AlreadyExistsException(HTTPException):
    def __init__(self, object_name: str):
        super().__init__(
            detail=ALREADY_EXISTS_TEMPLATE.format(object_name),
            status_code=status.HTTP_409_CONFLICT,
        )


class NotFoundException(HTTPException):
    def __init__(self, object_name: str):
        super().__init__(
            detail=NOT_FOUND_TEMPLATE.format(object_name),
            status_code=status.HTTP_404_NOT_FOUND,
        )


class NoFieldsProvidedException(HTTPException):
    def __init__(self, object_name: str):
        super().__init__(
            detail=NO_FIELDS_PROVIDED_TEMPLATE.format(object_name),
            status_code=status.HTTP_400_BAD_REQUEST,
        )
