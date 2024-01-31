import {program} from "commander";

import * as foodService from "./foods/index.js";

const invokeAction = async ({action, id, ...data})=> {
    switch(action) {
        case "list":
            const allFoods = await foodService.getAllFoods();
            return console.log(allFoods);
        case "getById":
            const oneFood = await foodService.getFoodById(id);
            return console.log(oneFood);
        case "add":
            const newFood = await foodService.addFood(data);
            return console.log(newFood);
        case "updateById":
            const updateFood = await foodService.updateFoodById(id, data);
            return console.log(updateFood);
        case "deleteById":
            const deleteFood = await foodService.deleteFoodById(id);
            return console.log(deleteFood);
        default:
            console.log("Unkown action");
    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-w, --weight <type>");

program.parse();

const options = program.opts();
invokeAction(options);