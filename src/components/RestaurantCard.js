export const RestaurantCard = (props) => {
    const { cloudnaryImageId, cloudnaryImageUrl, name, cusines, rating, deliveryTime, costForTwo } = props.restaurant;
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={cloudnaryImageUrl} alt={name} />

            <p>Cuisines: {cusines}</p>
            <p>Rating: {rating}</p>
            <p>Delivery Time: {deliveryTime} mins</p>
            <p>Cost for Two: ₹{costForTwo}</p>
        </div>
    );
};

