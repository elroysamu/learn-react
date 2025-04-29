import { RestaurantCard } from "./RestaurantCard";
import { mockData as restaurants } from "../utils/mock";
import{ useState, useEffect } from "react";
import { fetchRestaurantData } from "../utils/mockApis";

// create a state variable which will hold the restaurant data
// create a button which will filter the restaurant data based on the rating
function filterRestaurants(listOfRestaurants) {
    const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating > 4);
    console.log(filteredRestaurants);
    return filteredRestaurants;
}

export const Body = () => {    
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const  [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
        const data = await fetchRestaurantData();
        const json = await data.json();
        setListOfRestaurants(json.data);
        setFilteredRestaurants(json.data);
    };

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />

                <div className="search">
                    <input
                        className="search-box"
                        placeholder="Search for restaurants"
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    ></input>
                </div>

                <button
                    className="search-button"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
                            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}
                >
                    Search
                </button>


                <button className="filter-button" onClick={ () =>{
                    const filteredRestaurants = filterRestaurants(restaurants)
                    setFilteredRestaurants(filteredRestaurants);
                }}>Filter</button>
                <button className="sort-button">Sort</button>
            </div>
            <div className="restaurant-list">
               { filterRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.cloudnaryImageId}
                        restaurant = {restaurant}
                    />
                ))}
                
            </div>
        </div>
    );
}