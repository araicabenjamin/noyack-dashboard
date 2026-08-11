import Chat from "./Chat";
import ChatInput from "./ChatInput";
import type { Message } from "../../types/Copilot";
import "./CopilotModal.css";
import { useState } from "react";

import { X } from "lucide-react";

// OWNS ALL THE MESSAGES AND INPUTS FOR THE COPILOT MODAL

type CopilotModalProps = {
  onClose: () => void;
};

const CopilotModal = ({ onClose }: CopilotModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm your personal wealth assistant. Ask me anything about your finances, taxes, investments, or retirement planning.",
    },
  ]);

  const handleSendMessage = async (message: string) => {
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        content: message,
      },
    ]);

    try {
      const response = await fetch("/api/copilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to get Copilot response");
      }

      const data = await response.json();

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "assistant",
          content: "Sorry, I wasn't able to process that request.",
        },
      ]);
    }
  };

  return (
    <>
      <div className="copilotOverlay" onClick={onClose} />

      <div className="copilotModal">
        <div className="copilotHeader">
          <h2>Noyack Copilot</h2>

          <button className="closeButton" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="copilotContent">
          <Chat messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </>
  );
};

export default CopilotModal;
