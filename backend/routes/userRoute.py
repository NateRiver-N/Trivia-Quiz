from fastapi import APIRouter
from config.db import users_collection



router = APIRouter()

@router.post("/create")
def create_user(user: dict):

    existing = users_collection.find_one(
        {"clerkId": user["clerkId"]}
    )

    if existing:
        return {
            "message": "User Exists"
        }

    users_collection.insert_one(user)

    return {
        "message": "User Created"
    }


@router.post("/submit")
def submit_quiz(data: dict):
    pass
    users_collection.update_one(
    {
        "clerkId": data["clerkId"]
    },
    {
        "$inc": {
            "xp": data["score"],
            "gamesPlayed": 1
        }
    }
)
    return {
    "message": "Quiz Submitted",
    "score": data["score"]
}