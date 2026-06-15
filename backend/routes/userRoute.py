from fastapi import APIRouter
from schemas import User

router = APIRouter()

users=[]

@router.post("/")
def create_user(user:User):
    users.append(user)
    return {
        "msg":"User Created"
    }

@router.get("/")
def get_users():
    return users
