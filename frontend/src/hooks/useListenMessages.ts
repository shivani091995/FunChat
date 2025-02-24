import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";


const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();


    useEffect(()=> {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage])
        })

    },[socket, messages, setMessages])
return () => {socket?.off("newMessage")};
}

export default useListenMessages;