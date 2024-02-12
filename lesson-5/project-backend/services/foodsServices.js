import Food from "../models/Food.js";

export const getAllFoods = () => Food.find();

export const getFoodById = async (id) => {
    // const foods = await getAllFoods();
    // const result = foods.find(item => item.id === id);
    // return result || null;
}

export const addFood = async (data) => Food.create(data);
    // const foods = await getAllFoods();
    // const newFood = {
    //     id: nanoid(),
    //     ...data,
    // };
    // foods.push(newFood);
    // await updateFoods(foods);
    // return newFood;


export const updateFoodById = async (id, data) => {
    // const foods = await getAllFoods();
    // const index = foods.findIndex(item => item.id === id);
    // if (index === -1) {
    //     return null;
    // }
    // foods[index] = { ...foods[index], ...data };
    // await updateFoods(foods);
    // return foods[index];
}

export const deleteFoodById = async (id) => {
    // const foods = await getAllFoods();
    // const index = foods.findIndex(item => item.id === id);
    // if (index === -1) {
    //     return null;
    // }
    // const [result] = foods.splice(index, 1);
    // await updateFoods(foods);
    // return result;
}