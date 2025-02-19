

const SingleMessage = () => {
    return (
        <div className="flex items-start space-x-4 p-2">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="User Avatar"
            />
          </div>
      
          {/* Chat Bubble and Footer */}
          <div className="flex-1">
            <div className="inline-block px-4 py-2 rounded-lg text-white bg-purple-950">
              Hello, this is a static message.
            </div>
            <div className="mt-1 text-xs text-gray-500 flex items-center">
              12:34 PM
            </div>
          </div>
        </div>
      );
      
}

export default SingleMessage
