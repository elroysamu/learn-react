import { RestaurantCard } from "./RestaurantCard";
import{ useState, useEffect } from "react";
import { fetchRestaurantList } from "../utils/mockApis";
import { Atom } from 'react-loading-indicators';
import { Link } from "react-router";


// create a state variable which will hold the restaurant data
// create a button which will filter the restaurant data based on the rating
function filterRestaurants(listOfRestaurants) {
    const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating > 4);
    return filteredRestaurants;
}

export const Body = () => {    
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
    const  [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetchRestaurantList();
        const json = await data.json();
        setListOfRestaurants(json.data);
        setFilteredRestaurantsList(json.data);
    };
    

    return listOfRestaurants.length === 0? (
        <div className="loader-container">
        <Atom color="#11399b" size="large" text="" textColor="" />
      </div>       
    ) :(
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
                        setFilteredRestaurantsList(filteredRestaurants);
                    }}
                >
                    Search
                </button>


                <button className="filter-button" onClick={ () =>{
                    const filteredRestaurants = filterRestaurants(filteredRestaurantsList)
                    setFilteredRestaurantsList(filteredRestaurants);
                }}>top rated</button>
                <button className="sort-button">Sort</button>
            </div>
            <div className="restaurant-list">
               { filteredRestaurantsList.map((restaurant) => (
                    <Link key={restaurant.cloudnaryImageId} 
                        to={"/restaurant/" + restaurant.cloudnaryImageId}>
                        <RestaurantCard restaurant = {restaurant}/>
                    </Link>
                ))}
                
            </div>
        </div>
    );
}