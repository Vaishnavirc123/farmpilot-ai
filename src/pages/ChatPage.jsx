import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm FarmPilot.ai. Ask me any farming question in your preferred language.",
    },
  ]);

  const handleSend = async (message) => {
    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    try {
      const response = await axios.post(
        "http://localhost:8000/chat",
        {
          message: message,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to FarmPilot.ai.",
        },
      ]);
    }
  };

  return (
    <div className="h-screen bg-[#F5F7F4] flex flex-col">
      <Header />

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
            image={msg.image}
          />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatPage;