import jwt from 'jsonwebtoken';

export const generateToken= (userId,res) =>{
    // Generate token
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "7d"
    })
    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000, // 7 days in milliseconds
        httpOnly: true, // prevent XSS attacks
        secure: process.env.NODE_ENV !== "development", // only in production
        sameSite: "strict" ,// prevent CSRF attacks
    });

    return token;
};