import Divider from "./Divider";


const SingleChat = () => {
  
    return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
        {/* Avatar */}
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conversation details */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-4 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>

      <Divider/>
    </>
  );
  



      
}

export default SingleChat
