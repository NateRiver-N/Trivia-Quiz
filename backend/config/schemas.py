from pydantic import BaseModel

class Question(BaseModel):
    question:str
    options:list[str]
    correctAnswer: str
    category: str
    difficulty: str
    xpReward: int



class Score(BaseModel):
    clerkId: str
    score: int
    category: str