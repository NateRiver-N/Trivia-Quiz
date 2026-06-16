from fastapi import APIRouter
from config.schemas import Question
from config.db import questions_collection

router = APIRouter()

@router.get("/{category}")
def get_questions(category: str):

    questions = list(
        questions_collection.aggregate([
        {
            "$match": {
                "category": category
            }
        },
        {
            "$sample": {
                "size": 5
            }
        }
    ])
)

    for q in questions:
        q["_id"] = str(q["_id"])

    return questions