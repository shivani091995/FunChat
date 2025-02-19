import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti"; // Ensure this import is available

const MessageWindow = () => {
  
  const noChatSelected = false;
  return (
    <div className="md:min-w-[700px] flex flex-col h-[700px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-base">To:</span>{" "}
            <span className="text-gray-900 font-extrabold">Cara Wilson</span>
          </div>

          <div className="flex-1 overflow-auto">
            <Messages />
          </div>

          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageWindow;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-1 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Shivani ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
