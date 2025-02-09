import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma.js";


interface DecodedToken extends JwtPayload {
  userId: string;
}
//this is for the user -> ts error
declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            }
        }
    }
}

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    if (!decoded) {
        res
        .status(401)
        .json({ error: "Invalid Token, user can not be authorized" });
        return;
    }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, username: true, fullName: true, profilePic: true },
    });

    if(!user){
       res.status(404).json({error: "User not found!"})
       return; 
    }

    req.user = user;

    next();
  } catch (error:any) {
    console.log("error in middleware", error.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};
export default protectRoute;

//func that runs in req and res lifecycle ->
//in the router.get("/me", protectRoute, getMe) -> when a req comes in for /me endpoint, first the middleware func protectRoute will run, if it runs successfully, then we callback the getMe function.
//protectRoute - checks verification.
