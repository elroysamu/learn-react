export const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div className="item-card" key={item.id || `${item.name}-${item.price}-${index}`}>
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <p className="item-price">₹{item.price / 100}</p>
                </div>
            ))}
        </div>
    );
};
