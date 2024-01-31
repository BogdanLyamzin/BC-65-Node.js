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

const actionIndex = process.argv.indexOf("--action");
if(actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    invokeAction({action})
}