import { RestaurantCard } from "./RestaurantCard";
import { mockData as restaurants } from "../utils/mock";
import{ useState } from "react";

// create a state variable which will hold the restaurant data
// create a button which will filter the restaurant data based on the rating
function filterRestaurants(listOfRestaurants) {
    const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating > 4);
    console.log(filteredRestaurants);
    return filteredRestaurants;
}

export const Body = () => {    
    const  [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
                <button className="filter-button" onClick={ () =>{
                    const filteredRestaurants = filterRestaurants(restaurants)
                    setListOfRestaurants(filteredRestaurants);
                }}>Filter</button>
                <button className="sort-button">Sort</button>
            </div>
            <div className="restaurant-list">
               { listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.cloudnaryImageId}
                        restaurant = {restaurant}
                    />
                ))}
                
            </div>
        </div>
    );
}