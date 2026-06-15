from fastapi import APIRouter
from schemas import Question

router = APIRouter()

questions = []

@router.get("/")
def get_questions():
    return questions

@router.post("/")
def create_question(question:Question):
    questions.append(question)
    return {
        "message":"Q Added"
    }