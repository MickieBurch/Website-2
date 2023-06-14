import React from "react";
import { Link } from "react-router-dom"


export const Mains = () =>{
    return(

    <div className="Menu-container">
      <div className="Mains-header">
      <Link to="/">
      <button>HOME</button>
      </Link>
            <h1> Mains</h1>
        </div>
            <div className="Main-container">
                <div className="Menu-option">
                <h1>Stuffed Breads</h1>
                <p>$9.99 (-6 slices) Spinach, Garlic & Cheese Broccoli, Onion & 3 cheese Tomato, Basil & Mozzarella Ham, Onion & Cheese, Pepperoni Pizza Bread, Buffalo Chicken</p>
                </div>

                <div className="Menu-option">
                <h1> Stuffed Puffs </h1>
                <p>$2.99Spinach, Garlic & Cheese Broccoli, Onion & 3 cheese Tomato, Basil & Mozzarella Ham, Onion & Cheese, Pepperoni Pizza Bread, Buffalo Chicken</p>
                </div>
                
                <div className="Menu-option">
                <h1>CHEESE & CHARCUTERIE</h1>
                <p> Noah’s weekly selection of artisanal cured meats, house-made pates, and specialty cheeses, with seasonal accoutrement — 24</p>
                </div>

                <div className="Menu-option">
                <h1>RILLETTES DE SAUMON</h1>
                <p> house-smoked salmon, crème fraîche, fresh herbs, olive oil, crostini</p>
                </div>

                <div className="Menu-option">
                <h1>CRAB CAKE SLIDER</h1>
                <p> blue crab, horseradish crème, arugula, brioche</p>
                </div>

             </div>
    </div>


    )
}

export default Mains