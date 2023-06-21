import joi from "joi";

export const newsSchema = joi.object({
  _id: joi.string(),
  name: joi.string().required().messages({
    "String.empty": "Tên không được để trống",
    "any.required": "Trường tên là bắt buộc",
  }),
  image: joi.string().messages({
    "String.empty": "Image không được để trống",
  }),
  author: joi.string().required().messages({
    "Number.empty": "Author không được để trống",
    "any.required": "Trường author là bắt buộc",
  }),
  date: joi.date(),
  describe: joi.string(),
  description: joi.string()
});