import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import SingleMessage from "./SingleMessage";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  console.log("Messages:", messages);

  return (
    <div className="px-4 flex flex-col">
      {loading ? <MessageSkeleton /> : null}

      {messages && messages.length > 0 ? (
        messages.map((message) => (
          <SingleMessage key={message.id} message={message} />
        ))
      ) : !loading ? (
        <p className="text-center text-white">
          Send a message to start the fun conversation
        </p>
      ) : null}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start the fun conversation
        </p>
      )}
    </div>
  );
};

export default Messages;

{
  /* <SingleMessage
        message="Hello, this is a left message"
        timestamp="12:34 PM"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      /> */
}
