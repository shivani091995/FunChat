import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import { profile } from "console";

export const signup = async (
  req: Request,
  res: Response,
  next: Function
): Promise<void> => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      res.status(400).json({ error: "Please fill in all fields" });
      return;
    }

    if (password !== confirmPassword) {
      res.status(400).json({ error: "Passwords don't match" });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser) {
      res.status(400).json({ error: "Username already exists" });
      return;
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const profilePic =
      gender === "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic,
      },
    });

    if (newUser) {
      generateToken(newUser.id, res);
      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in signup controller:", error);
    next(error); // Pass error to Express error handler
  }
};

export const login = async (
	req: Request,
	res: Response,
	next: Function
  ): Promise<void> => {
	try {
	  const { username, password } = req.body;
	  const user = await prisma.user.findUnique({ where: { username } });
	  
	  if (!user) {
		res.status(400).json({ error: "Invalid Credentials" });
		return; // Add return statement here
	  }
	  
	  const isPasswordCorrect = await bcryptjs.compare(password, user.password);
  
	  if (!isPasswordCorrect) {
		res.status(400).json({ error: "Invalid credentials" });
		return; // Add return statement here
	  }
  
	  generateToken(user.id, res);
	  res.status(200).json({
		id: user.id,
		fullName: user.fullName,
		profilePic: user.profilePic,
	  });
	} catch (error) {
	  console.error("Error in login controller:", error);
	  next(error);
	}
  };
  

export const logout = async (req: Request, res: Response) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });

	} catch (error: any) {
		console.log("Error in logging out", error.message);
		res.status(500).json({ error: "Internal Server Error" });		
	}
};

export const getMe = async (req:Request, res:Response) => {
	try {
		const user = await prisma.user.findUnique({where:{id:req.user.id} }) //where -> id == req.user.id

		if(!user){
			res.status(404).json({error: "user not found"});
			return;
		}

		res.status(200).json({
			id: user.id,
			fullName: user.fullName,
			usersname: user.username,
			profilePic: user.profilePic
		});
		
	} catch (error:any) {
		console.log("Error in logging out", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
	
}

export const deleteUser = async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    const userId = req.params.id;

    // Delete related messages
    await prisma.message.deleteMany({ where: { senderId: userId } });

    // Delete related conversations
    await prisma.conversation.deleteMany({ where: { participantsIds: { has: userId } } });

    // Now delete the user
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await prisma.user.delete({ where: { id: userId } });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser controller:", error);
    next(error);
  }
};
