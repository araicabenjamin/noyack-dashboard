import type { Message } from "../../types/Copilot";
import ChatMessage from "./ChatMessage";

type ChatProps = {
  messages: Message[];
};

const Chat = ({ messages }: ChatProps) => {
  return (
    <div className="chat">
      {messages.map((currentMessage, index) => (
        <ChatMessage
          key={index}
          message={currentMessage}
        />
      ))}
    </div>
  );
};

export default Chat;