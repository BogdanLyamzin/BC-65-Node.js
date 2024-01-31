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

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", name: "Cheeseburger", weight: 180})
// invokeAction({action: "updateById", id: "Es_eX7KOwBWzIuFdEfLv8", weight: 170})
// invokeAction({action: "deleteById", id: "Es_eX7KOwBWzIuFdEfLv8"})