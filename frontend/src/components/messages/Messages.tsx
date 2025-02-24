import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import SingleMessage from "./SingleMessage";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useListenMessages();

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (socket && selectedConversation) {
      // Request messages when conversation is selected
      socket.emit("getMessages", selectedConversation.id);
    }
  }, [selectedConversation, socket]);

  return (
    <div className="px-4 flex flex-col overflow-auto">
      {loading && <MessageSkeleton />}

      {!loading &&
        messages.map((message) => <SingleMessage key={message.id} message={message} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start the fun conversation</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
