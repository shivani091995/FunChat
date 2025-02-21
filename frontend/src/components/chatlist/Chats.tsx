import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";

import SingleChat from "./SingleChat";

const Chats = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="py-2 w-[350px] flex flex-col overflow-auto">
      {conversations.map((conversation: ConversationType) => (
        <SingleChat key={conversation.id} conversation={conversation} emoji={getRandomEmoji()} />
      ))}
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : null}
    </div>
  );
};

export default Chats;
