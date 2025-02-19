import Chats from "./Chats"
import Divider from "./Divider"
import LogoutButton from "./LogoutButton"
import SearchBar from "./SearchBar"


const ChatList = () => {
  return (
    <div className="border-r border-slate-500 p-10 flex flex-col w-[800px]">
      <SearchBar />
      <Divider />
      <Chats />
      <LogoutButton /> 
    </div>
  )
}


export default ChatList
