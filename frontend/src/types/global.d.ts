type ConversationType = {
    id: string;
    fullName: string;
    profilePic: string;
    emoji: string
}

type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
}


//! if we define types in global.d.ts file, we can use types in every file without needing to export or import it.