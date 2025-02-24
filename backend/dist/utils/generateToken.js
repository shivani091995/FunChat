import jwt from 'jsonwebtoken';
const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevents  XSS - cross site scripting
        sameSite: "strict", //CSRF attacks (cross-site request forgery)
        secure: process.env.NODE_ENV !== "development" // HTTPS
        //currently we are in development hence it will be HTTP, but when deployed it will become https.
    });
    return token;
};
export default generateToken;
