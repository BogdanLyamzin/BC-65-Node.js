import Food from "../models/Food.js";

export const getAllFoods = () => Food.find({}, "-createdAt -updatedAt");

export const getFoodById = async (id) => Food.findById(id);

export const addFood = async (data) => Food.create(data);

export const updateFoodById = async (id, data) => Food.findByIdAndUpdate(id, data);

export const deleteFoodById = async (id) => Food.findByIdAndDelete(id);