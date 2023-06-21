import { newsSchema } from "../Schemas/news";
import News from "../models/news";
export const create = async (req, res) => {
  try {
    const { error } = newsSchema.validate(req.body);
    if (error) {
      res.json({
        message: error.details[0].message,
      });
    }
    const data = await News.create(req.body);
    return res.status(201).json({
      message: "Thêm tin tức thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const data = await News.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Không có danh mục nào",
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
export const getAll = async (req, res) => {
  try {
    const data = await News.find();
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
    const { error } = newsSchema.validate(req.body);
    if (error) {
      res.status(400).
        json({
          message: error.details[0].message,
        });
    }
    const data = await News.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({
      message: "Sửa tin tức thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const data = await News.findOneAndRemove({ _id: req.params.id });
    return res.json({
      message: "Xóa tin tức thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
