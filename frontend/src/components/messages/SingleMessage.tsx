interface SingleMessageProps {
  isEnd?: boolean;
  message: string;
  timestamp: string;
  avatarUrl: string;
}

const SingleMessage: React.FC<SingleMessageProps> = ({
  isEnd = false,
  message,
  timestamp,
  avatarUrl
}) => {
  return (
    <div className={`flex items-start space-x-4 p-2 w-full ${isEnd ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          className="w-10 h-10 rounded-full"
          src={avatarUrl}
          alt="User Avatar"
        />
      </div>

      {/* Chat Bubble and Footer */}
      <div className={`flex flex-col ${isEnd ? 'items-end' : 'items-start'}`}>
        <div className="max-w-[80%] px-4 py-2 rounded-lg text-white bg-purple-950">
          {message}
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
