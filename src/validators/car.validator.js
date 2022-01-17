import Joi from "joi";

export const CarValidator = Joi.object({
    id: Joi.number().min(1).max(10000),
    model: Joi.string().regex(new RegExp('^[a-zA-zА-яіІїЇґҐёЁ]{1,20}$')).required().messages({
        'string.empty': '"model" cannot be empty',
        'string.pattern.base': 'Only letters min 1 max 20'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.base': 'Value has to be 1 - 1000000 inbetween',
        'number.min': 'Value has to be greater than 0',
        'number.max': 'Value has to be less than or equal 1000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'Value has to be 1900 - 2022 inbetween',
        'number.min': 'Value has to be greater than or equal 1900',
        'number.max': 'Value has to be less than or equal 2022'
    })
})

export const idValidator = Joi.object({
    id: Joi.number().min(1).max(10000).required()
})