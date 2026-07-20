import Chat from "./Chat";
import ChatInput from "./ChatInput";
import "./CopilotModal.css";
import { useState } from "react";

import { X } from "lucide-react";

// OWNS ALL THE MESSAGES AND INPUTS FOR THE COPILOT MODAL

type CopilotModalProps = {
  onClose: () => void;
};

const CopilotModal = ({ onClose }: CopilotModalProps) => {
  const [messages, setMessages] = useState([]);
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
          <Chat />
          <ChatInput />
        </div>
      </div>
    </>
  );
};

export default CopilotModal;
