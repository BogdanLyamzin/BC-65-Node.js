import * as foodsServices from "../services/foodsServices.js";

import HttpError from "../helpers/HttpError.js";

import { foodAddSchema, foodUpdateSchema } from "../schemas/foodsSchemas.js";

const getAllFoods = async (req, res, next) => {
    try {
        const result = await foodsServices.getAllFoods();
        res.json(result);
    }
    catch (error) {
        next(error)
    }
}

const getFoodById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await foodsServices.getFoodById(id);
        if (!result) {
            throw HttpError(404, `Food with id=${id} not found`);
            // const error = new Error(`Food with id=${id} not found`);
            // error.status = 404;
            // throw error;
            //    return res.status(404).json({
            //         message: `Food with id=${id} not found`
            //     })
        }
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}

const addFood = async (req, res, next) => {
    try {
        const { error } = foodAddSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const result = await foodsServices.addFood(req.body);

        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
}

const updateFoodById = async (req, res, next)=> {
    try {
        const { error } = foodUpdateSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const {id} = req.params;
        const result = await foodsServices.updateFoodById(id, req.body);
        if (!result) {
            throw HttpError(404, `Food with id=${id} not found`);
        }

        res.json(result);
    }
    catch(error) {
        next(error);
    }
}

const deleteFoodById = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await foodsServices.deleteFoodById(id);
        if (!result) {
            throw HttpError(404, `Food with id=${id} not found`);
        }

        // res.status(204).send();

        res.json({
            message: "Delete success"
        })
    }
    catch(error) {
        next(error);
    }
}

export default {
    getAllFoods,
    getFoodById,
    addFood,
    updateFoodById,
    deleteFoodById,
}