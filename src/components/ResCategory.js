import { useState } from "react";
import { ItemList } from "./ItemList";

export const ResCategory = ({ category, showAccordion, showAccordionIndex }) => {


    function handleAccordionToggle() {
        // Logic to handle accordion toggle
        showAccordionIndex();
        console.log("Accordion toggled");

    }



    return (
        <div className="category-container">
            <div className="category-card">
            <div className="category-header">
                    <h2 className="category-name">{category.name}</h2>
                    <button  onClick={handleAccordionToggle} className="accordion-toggle">
                         {showAccordion ? '-' : '+'}
                    </button>
                </div>
        
        <div className="item-list">
            
          { showAccordion && <ItemList items={category.items}/>}
            
        </div>
        </div>
        </div>
    );
}