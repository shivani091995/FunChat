import useConversation from "../../zustand/useConversation";
import Divider from "./Divider";

const SingleChat = ({
  conversation,
  emoji,
}: {
  conversation: ConversationType;
  emoji: string;
}) => {
  const { setSelectedConversation, selectedConversation } = useConversation();

  const isSelected = selectedConversation?.id === conversation.id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-purple-600 rounded p-2 cursor-pointer transition
          sm:p-3 md:p-4 lg:p-5 ${isSelected ? "bg-purple-950" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar Section */}
        <div className="relative w-12 h-12">
          <img
            src={conversation.profilePic}
            alt={`${conversation.fullName} avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conversation Details */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center text-sm sm:text-base md:text-lg">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
};

export default SingleChat;
