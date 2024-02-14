import axios from "axios";

const foodInstance = axios.create({
    baseURL: "http://localhost:4000/api/foods"
})

export const fetchAllFoods = async ()=> {
    const {data} = await foodInstance.get("/");
    return data;
}