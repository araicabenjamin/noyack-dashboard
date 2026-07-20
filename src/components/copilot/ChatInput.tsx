import { ArrowUp } from "lucide-react";
import { useState } from "react";

// RECEIVES A FUNCTION TO ADD A MESSAGE TO THE CHAT MODAL AND A FUNCTION TO CLEAR THE INPUT FIELD

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    // Handle sending the message here
    console.log("Sending message:", message);
    setMessage(""); // Clear the input after sending
  }

  return (
    <div className="chatInput">
      
      <div className="chatInputContainer">
        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleSendMessage}>
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
