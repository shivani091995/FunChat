import prisma from "../db/prisma.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;
        //check if a convo exists or not
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, receiverId],
                }
            }
        });
        //start of the conversation
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantsIds: {
                        set: [senderId, receiverId]
                    }
                }
            });
        }
        //create new message
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id
            }
        });
        //we added that message to the conversation.
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        }
                    }
                }
            });
        }
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json({
            newMessage
        });
    }
    catch (error) {
        console.error("error in sending message", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const getMessage = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const senderId = req.user.id;
        //find the conversations first
        const conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, userToChat]
                    //Find a conversation where both senderId and userToChat are participants
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
                //Retrieve all messages in the conversation, ordering them by createdAt in ascending order.
            }
        });
        if (!conversation) {
            res.status(200).json([]);
            return;
        }
        res.status(200).json(conversation.messages);
    }
    catch (error) {
        console.error("error in getMessage", error.message);
        res.status(500).json({ error: "Internal server error " });
    }
};
export const getUserConvoBar = async (req, res) => {
    try {
        const authenticatedUser = req.user.id;
        const chats = await prisma.user.findMany({
            where: {
                id: {
                    not: authenticatedUser
                }
            },
            select: {
                id: true,
                fullName: true,
                profilePic: true,
            }
        });
        res.status(200).json(chats);
    }
    catch (error) {
        console.error("error in getMessage", error.message);
        res.status(500).json({ error: "Internal server error " });
    }
};
