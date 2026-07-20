import { useState } from "react";
import type { Message } from "../../types/Copilot";
import ChatMessage from "./ChatMessage";

// RECEIVES ALL MESSAGES TO DISPLAY IN THE CHAT MODAL

const Copilot = () => {
  const [messages, setMessages] = useState<Message[]>([
  {
    role: "assistant",
    content:
      "Hi, I'm your personal wealth assistant. Ask me anything about your finances, taxes, investments, or retirement planning.",
  },
]);

return (
  <div className="chat">
    {messages.map((currentMessage) => (
      <ChatMessage message={currentMessage} />
    ))}
  </div>
);

};

export default Copilot;