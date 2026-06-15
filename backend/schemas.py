from pydantic import BaseModel

class Question(BaseModel):
    question:str
    options:list[str]
    answer:str


class User(BaseModel):
    Username:str
    email:str