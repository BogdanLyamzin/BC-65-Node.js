import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const foodsPath = path.resolve("foods", "foods.json");
// const foodsPath = path.join(__dirname, "foods.json"); - only CommonJS 

const updateFoods = foods => fs.writeFile(foodsPath, JSON.stringify(foods, null, 2));

export const getAllFoods = async () => {
    const buffer = await fs.readFile(foodsPath);
    return JSON.parse(buffer);
}

export const getFoodById = async (id) => {
    const foods = await getAllFoods();
    const result = foods.find(item => item.id === id);
    return result || null;
}

export const addFood = async (data) => {
    const foods = await getAllFoods();
    const newFood = {
        id: nanoid(),
        ...data,
    };
    foods.push(newFood);
    await updateFoods(foods);
    return newFood;
}

export const updateFoodById = async (id, data) => {
    const foods = await getAllFoods();
    const index = foods.findIndex(item => item.id === id);
    if (index === -1) {
        return null;
    }
    foods[index] = { ...foods[index], ...data };
    await updateFoods(foods);
    return foods[index];
}

export const deleteFoodById = async (id) => {
    const foods = await getAllFoods();
    const index = foods.findIndex(item => item.id === id);
    if (index === -1) {
        return null;
    }
    const [result] = foods.splice(index, 1);
    await updateFoods(foods);
    return result;
}