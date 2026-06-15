from fastapi import FastAPI
from routes.questionRoute import router as question_router
from routes.userRoute import router as user_router

app = FastAPI()

app.include_router(
    question_router,
    prefix="/questions",
    tags=["Questions"]
)

app.include_router(
    user_router,
    prefix="/users",
    tags=["Users"]
)