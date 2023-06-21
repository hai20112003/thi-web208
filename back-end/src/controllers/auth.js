import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { signinSchema, userSchema } from "./../Schemas/auth";
import { signupSchema } from "./../Schemas/auth";

export const signin = async (req, res) =>  {
  try {
      const {password, email} = req.body;
      const {error} = signinSchema.validate(req.body, {abortEarly: false});
  
      if(error) {
          const errors = error.details.map((err) => err.message);
          return res.status(400).json({
              message: errors,
          })
      }
      const user = await User.findOne({ email: req.body.email });
      if(!user){
          return res.status(400).json({
              message: "Bạn chưa đăng ký tài khoản",
      })
      }
      const isMatch = await bcrypt.compare(password, user.password);
  
      if(!isMatch){
          return res.status(401).json({
              message: "Mật khẩu không đúng",
          })
      }
      const accessToken = jwt.sign({ _id: user._id }, "ASM", { expiresIn: "1d" });
  
      return res.status(201).json({
          message: "Đăng nhập thành công",
          accessToken,
          user,
      });
  } catch (error) {
      return res.status(400).json({
          message: error.message
      });
  }
}
export const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(402).json({
        messages: errors,
      });
    }
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });
    const accessToken = jwt.sign({ _id: user._id }, "ASM", { expiresIn: "1d" });
    return res.status(201).json({
      message: "Đăng ký tk thành công",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const data = await User.find();
    if (data.length === 0) {
      return res.status(400).json({ message: "Không có tài khoản nào" });
    }
    return res.status(200).json({
      message: "Danh sách",
      data
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(201).json({
      message: "Danh sách",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({
      message: "Sửa tài khoản thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
