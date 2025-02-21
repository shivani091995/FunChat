import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 my-4 relative">
      <input
        type="text"
        placeholder="Start typing"
        className="border text-sm rounded-lg block w-full p-2.5 pr-12 bg-gray-700 border-gray-600 text-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8"
      >
        {loading ? (
          <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-75" />
        ) : (
          <BsSend />
        )}
      </button>
    </form>
  );
};

export default MessageInput;
