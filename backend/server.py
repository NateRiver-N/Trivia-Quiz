from fastapi import FastAPI
from routes.questionRoute import router as question_router
from routes.userRoute import router as user_router
from config.db import users_collection
from fastapi.middleware.cors import CORSMiddleware

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


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

