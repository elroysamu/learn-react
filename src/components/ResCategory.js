import { useState } from "react";
import { ItemList } from "./ItemList";

export const ResCategory = ({ category }) => {

    const [showAccordion, setShowAccordion] = useState(false);

    function handleAccordionToggle() {
        // Logic to handle accordion toggle
        console.log("Accordion toggled");
        setShowAccordion(!showAccordion);

    }



    return (
        <div className="category-container">
            <div className="category-card">
            <div className="category-header">
                    <h2 className="category-name">{category.name}</h2>
                    <button  onClick={handleAccordionToggle} className="accordion-toggle">
                         {showAccordion ?'-' : '+'}
                    </button>
                </div>
        
        <div className="item-list">
            
          { showAccordion && <ItemList items={category.items}/>}
            
        </div>
        </div>
        </div>
    );
}