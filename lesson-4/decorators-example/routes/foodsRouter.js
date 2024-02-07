import express from "express";

import foodsController from "../controllers/foodsController.js";

import validateBody from "../decorators/validateBody.js";

import { foodAddSchema, foodUpdateSchema } from "../schemas/foodsSchemas.js";

const foodsRouter = express.Router();

foodsRouter.get("/", foodsController.getAllFoods);

foodsRouter.get("/:id", foodsController.getFoodById);

foodsRouter.post("/", validateBody(foodAddSchema), foodsController.addFood);

foodsRouter.put("/:id", validateBody(foodUpdateSchema), foodsController.updateFoodById);

foodsRouter.delete("/:id", foodsController.deleteFoodById);

export default foodsRouter;