import { RestaurantCard } from "./RestaurantCard";
import { mockData } from "../utils/mock";


export const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="restaurant-list">
               { mockData.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.cloudnaryImageId}
                        restaurant = {restaurant}
                    />
                ))}
                
            </div>
        </div>
    );
}