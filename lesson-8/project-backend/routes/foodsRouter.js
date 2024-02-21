import express from "express";

import foodsController from "../controllers/foodsController.js";

import validateBody from "../decorators/validateBody.js";

import { foodAddSchema, foodUpdateSchema } from "../schemas/foodsSchemas.js";

import isValidId from "../middlewares/isValidId.js";
import authtenticate from "../middlewares/authenticate.js";

const foodsRouter = express.Router();

foodsRouter.use(authtenticate);

foodsRouter.get("/", foodsController.getAllFoods);

foodsRouter.get("/:id", isValidId, foodsController.getFoodById);

foodsRouter.post("/", validateBody(foodAddSchema), foodsController.addFood);

foodsRouter.put("/:id", isValidId, validateBody(foodUpdateSchema), foodsController.updateFoodById);

foodsRouter.delete("/:id", isValidId, foodsController.deleteFoodById);

export default foodsRouter;