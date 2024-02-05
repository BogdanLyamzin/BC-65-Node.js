import express from "express";

import foods from "../data/foods.js";

const foodsRouter = express.Router();

foodsRouter.get("/", (req, res)=> {
    res.json(foods);
})

foodsRouter.get("/:id", (req,res)=> {
    res.json(foods[0])
})

foodsRouter.post("/", (req, res)=> {
    res.status(201).json(foods[0]);
})

foodsRouter.put("/:id", (req,res)=> {
    res.json(foods[0])
})

foodsRouter.delete("/:id", (req,res)=> {
    res.json(foods[0])
})

export default foodsRouter;