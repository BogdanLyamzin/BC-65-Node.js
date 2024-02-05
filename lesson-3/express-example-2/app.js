import express from "express";

import foods from "./data/foods.js";

const app = express();

// app.set("json spaces", 4);

app.get("/foods", (req, res)=> {
    const databaseResponse = null;
    // res.json(databaseResponse)
    // res.send(databaseResponse)
    res.json(foods);
    // res.send(foods);
})

app.listen(3000, ()=> console.log("Server running on 3000 PORT"))