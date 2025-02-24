import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

interface MessageType {
  senderId: string;
  body: string;
  createdAt: string;
  shouldShake?: boolean;
}

const SingleMessage = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  if (!authUser || !message) return null;
  const fromMe = authUser && message?.senderId === authUser?.id;

  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div
      className={`flex flex-col ${fromMe ? "items-end" : "items-start"} p-2`}
    >
      <div className="flex items-end gap-2 max-w-[80%]">
        {/* Profile Image - Only show on desktop and if not fromMe */}
        {!fromMe && (
          <div className="flex-shrink-0">
            <img
              className="w-6 md:w-10 h-6 md:h-10 rounded-full"
              src={img}
              alt="User Avatar"
            />
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={`px-4 py-2 rounded-lg text-white text-sm md:text-md ${shakeClass}
            ${fromMe ? "bg-purple-900" : "bg-gray-700"}`}
        >
          {message.body}
        </div>

        {/* Profile Image - Only show on desktop and if fromMe */}
        {fromMe && (
          <div className="hidden md:block flex-shrink-0">
            <img
              className="w-6 md:w-10 h-6 md:h-10 rounded-full"
              src={img}
              alt="User Avatar"
            />
          </div>
        )}
      </div>

      {/* Timestamp */}
      <div className="text-xs text-white opacity-50 mt-1 flex gap-1 items-center">
        {message.createdAt ? extractTime(message.createdAt) : "Just now"}
      </div>

      {/* Shake Animation */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SingleMessage;
