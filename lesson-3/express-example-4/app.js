import express from "express";
import cors from "cors";

import foodsRouter from "./routes/foodsRouter.js";

const app = express();

app.use(cors());

app.use("/api/foods", foodsRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not Found"
    })
})

app.listen(3000, ()=> console.log("Server running at 3000 PORT"));