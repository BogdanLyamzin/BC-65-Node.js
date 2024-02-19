import * as foodsServices from "../services/foodsServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const getAllFoods = async (_, res) => {
    const result = await foodsServices.getAllFoods();
    res.json(result);
}

const getFoodById = async (req, res) => {
    const { id } = req.params;
    const result = await foodsServices.getFoodById(id);
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }
    res.json(result);
}

const addFood = async (req, res) => {
    const result = await foodsServices.addFood(req.body);

    res.status(201).json(result);
}

const updateFoodById = async (req, res) => {
    const { id } = req.params;
    const result = await foodsServices.updateFoodById(id, req.body);
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }

    res.json(result);
}

const deleteFoodById = async (req, res) => {
    const { id } = req.params;
    const result = await foodsServices.deleteFoodById(id);
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }

    // res.status(204).send();

    res.json({
        message: "Delete success"
    })
}

export default {
    getAllFoods: ctrlWrapper(getAllFoods),
    getFoodById: ctrlWrapper(getFoodById),
    addFood: ctrlWrapper(addFood),
    updateFoodById: ctrlWrapper(updateFoodById),
    deleteFoodById: ctrlWrapper(deleteFoodById),
}