import SingleMessage from "./SingleMessage";

const Messages = () => {
  return (
    <div className="px-4 flex flex-col">
      <SingleMessage
        message="Hello, this is a left message"
        timestamp="12:34 PM"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <SingleMessage
        isEnd={true}
        message="Hello, this is a right message"
        timestamp="12:35 PM"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
    </div>
  );
};

export default Messages;
