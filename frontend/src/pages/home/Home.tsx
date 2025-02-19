import ChatList from "../../components/chatlist/ChatList";
import MessageWindow from "../../components/messages/MessageWindow";

const Home = () => {
  return (
    <div className="flex w-full max-w-[1200px] max-h-[1000px] mx-auto p-8 sm:h-[500px] md:h-[800px] rounded-r-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-white/10 backdrop-filter backdrop-blur-md">
      <ChatList />
      <MessageWindow />
    </div>
  );
};

export default Home;
