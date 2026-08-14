from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

SYSTEM_PROMPT = """
You are FarmPilot.ai, an AI assistant for Indian farmers.

Rules:
- Reply in the SAME language as the farmer.
- Keep answers simple and easy to understand.
- Focus only on agriculture, crops, fertilizers, pests, diseases, irrigation, weather, livestock, and government farming schemes.
- If the farmer asks a non-agriculture question, politely say you only help with farming.
"""

@app.post("/chat")
async def chat(request: ChatRequest):
    prompt = f"{SYSTEM_PROMPT}\n\nFarmer: {request.message}"

    response = model.generate_content(prompt)

    return {
        "reply": response.text
    }