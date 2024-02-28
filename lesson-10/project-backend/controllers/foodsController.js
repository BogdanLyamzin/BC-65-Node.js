import fs from "fs/promises";
import path from "path";

import * as foodsServices from "../services/foodsServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const foodsDir = path.resolve("public", "foods");

const getAllFoods = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const result = await foodsServices.getFoodsByFilter({ owner }, { skip, limit });
    const total = await foodsServices.getFoodsCountByFilter({ owner });
    
    res.json({
        total,
        result,
    });
}

const getFoodById = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    // const result = await foodsServices.getFoodById(id);
    const result = await foodsServices.getFoodByFilter({ _id: id, owner });
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }
    res.json(result);
}

const addFood = async (req, res) => {
    const {path: oldPath, filename}= req.file;
    const newPath = path.join(foodsDir, filename);
    await fs.rename(oldPath, newPath);
    const { _id: owner } = req.user;
    const photo = path.join("foods", filename);
    const result = await foodsServices.addFood({ ...req.body, photo, owner });

    res.status(201).json(result);
}

const updateFoodById = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await foodsServices.updateFoodByFilter({ _id: id, owner }, req.body);
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }

    res.json(result);
}

const deleteFoodById = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    // const result = await foodsServices.deleteFoodById(id);
    const result = await foodsServices.deleteFoodByFilter({ _id: id, owner });
    if (!result) {
        throw HttpError(404, `Food with id=${id} not found`);
    }

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