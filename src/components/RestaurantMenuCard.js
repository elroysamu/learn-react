import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRestaurantMenu } from "../utils/mockApis";

export const RestaurantMenuCard = () => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetchRestaurantMenus();
    }, []);

    const fetchRestaurantMenus = async () => {
        const data = await fetchRestaurantMenu(id);
        const json = await data.json();
        console.log(json);
        
        setRestaurantDetails(json);
    };

    console.log(JSON.stringify(restaurantDetails),id);
    

    return (
        <div className="restaurant-menu-card">
            <h1>{restaurantDetails[0].name}</h1>
            <h2>{restaurantDetails[0].description}</h2>
        </div>
    );
}