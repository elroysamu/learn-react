import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchRestaurantMenu } from "../utils/mockApis";
import { ResCategory } from "./ResCategory";

export const RestaurantMenuCard = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [showAccordionIndex, setShowAccordionIndex] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenus();
  }, []);

  const fetchRestaurantMenus = async () => {
    const data = await fetchRestaurantMenu(id);
    const json = await data.json();
    setRestaurantDetails(json.data);
  };

  return restaurantDetails.length === 0 ? (
    <div className="loader-container">
      <h1>Loading...</h1>
    </div>
  ) : (<>
    <div className="restaurant-menu-card">
      <h1 className="res-menu-heading">
        {restaurantDetails.restaurantDetails.name}
      </h1>
      <p className="res-menu-description">
        {restaurantDetails.restaurantDetails.description}
      </p>
      <p className="res-menu-address">
        {restaurantDetails.restaurantDetails.address}
      </p>
    </div>
    <div className="category">
      {restaurantDetails.category.map((category, index) => (
        <ResCategory
          key={index}
          category={category}
          showAccordion={index ===  showAccordionIndex}
          showAccordionIndex={() =>
            setShowAccordionIndex(prevIndex => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>

    </>
  );
};
