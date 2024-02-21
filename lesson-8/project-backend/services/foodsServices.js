import Food from "../models/Food.js";

export const getAllFoods = () => Food.find({}, "-createdAt -updatedAt");

export const getFoodsByFilter = (filter, query = {}) => Food.find(filter, "-createdAt -updatedAt", query);

export const getFoodsCountByFilter = filter => Food.countDocuments(filter);

export const getFoodById = (id) => Food.findById(id);

export const getFoodByFilter = filter => Food.findOne(filter);

export const addFood = (data) => Food.create(data);

export const updateFoodById = (id, data) => Food.findByIdAndUpdate(id, data);

export const updateFoodByFilter = (filter, data) => Food.findOneAndUpdate(filter, data);

export const deleteFoodById = (id) => Food.findByIdAndDelete(id);

export const deleteFoodByFilter = filter => Food.findOneAndDelete(filter);