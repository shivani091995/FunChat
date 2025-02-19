import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-4 relative">
      <input
        type="text"
        placeholder="Start typing"
        className="border text-sm rounded-lg block w-full p-2.5 pr-12 bg-gray-700 border-gray-600 text-white"
      />
      <button
        type="submit"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8"
      >
        <BsSend />
      </button>
    </form>
  );
};

export default MessageInput;
