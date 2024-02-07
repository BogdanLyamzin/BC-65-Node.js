import Joi from "joi";

export const foodAddSchema = Joi.object({
    name: Joi.string().required(),
    weight: Joi.number().min(1).required(),
})

export const foodUpdateSchema = Joi.object({
    name: Joi.string(),
    weight: Joi.number().min(1),
})
