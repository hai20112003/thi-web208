import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.status(400).json({
                message: "Bạn chưa đăng nhâp",
            })
        }

        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, "ASM", async(error, payload)=>{
            if(error){
                if(error.name == 'TokenExpiredError'){
                    return res.status(401).json({
                        message: "Token hết hạn",
                    })
                }
                if(error.name == 'JsonWebTokenError'){
                    return res.status(401).json({
                        message: "Token không hợp lệ",
                    })
                }
            }
            const user = await User.findById(payload._id);
            if(user.role !== "admin"){
                return res.status(401).json({
                    message: "Bạn không có quyền truy cập nội dung này",
                })
            }
            next();
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

