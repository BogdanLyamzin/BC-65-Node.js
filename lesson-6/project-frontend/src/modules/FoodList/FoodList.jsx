import {useState, useEffect} from "react";

import { fetchAllFoods } from "../../api/foods-api";

const FoodList = ()=> {
    const [foods, setFoods] = useState([]);

    useEffect(()=> {
        const fetchFoods = async()=> {
            try {
                const data = await fetchAllFoods();
                setFoods(data);
            }
            catch(error) {
                console.log(error.message);
            }
        }

        fetchFoods();
    }, []);

    const elements = foods.map(({id, name}) => <li key={id}>{name}</li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default FoodList;