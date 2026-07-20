import type { Message } from "../../types/Copilot";

type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  return (
    <div className="chatMessage">
      <div className="messageAvatar">
        <img src="/NOYACK_Favicon.png" alt="NOYACK" className="messageLogo" />
      </div>

      <div className="messageContent">{props.message.content}</div>
    </div>
  );
};

export default ChatMessage;
