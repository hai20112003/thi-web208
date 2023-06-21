import joi from "joi";

export const productSchema = joi.object({
  _id: joi.string(),
  name: joi.string().required().messages({
    "String.empty": "Tên không được để trống",
    "any.required": "Trường tên là bắt buộc",
  }),
  priceNew: joi.number().required().messages({
    "Number.empty": "Price không được để trống",
    "any.required": "Trường price là bắt buộc",
  }),
  priceOld: joi.number(),
  quantity: joi.number().required().messages({
    "Number.empty": "Quantity không được để trống",
    "any.required": "Trường quantity là bắt buộc",
  }),
  image: joi.string().messages({
    "String.empty": "Image không được để trống",
  }),
  description: joi.string().messages({
    "String.empty": "Description không được để trống",
  }),
  categoryId: joi.string().required().messages({
    "String.empty": "CategoryId không được để trống",
    "any.required": "Trường categoryId là bắt buộc",
  }),
});
