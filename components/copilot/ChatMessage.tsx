import type { Message } from "../../types/Copilot";

type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`chatMessage ${message.role}`}>
      {message.role === "assistant" && (
        <div className="messageAvatar">
          <img
            src="/NOYACK_Favicon.png"
            alt="NOYACK"
            className="messageLogo"
          />
        </div>
      )}

      <div className="messageContent">{message.content}</div>
    </div>
  );
};

export default ChatMessage;