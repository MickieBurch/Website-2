import React from "react";
import NavBar from "./Nav-bar"
export const Sweets = () =>{
    return(

        <div className="Menu-container">
        <div className="Sweets-header">
            <NavBar />
            <h1> Desserts</h1>
        </div>
        <div className="Sweets-container">
                <div className="Menu-option">
                <h1>CHOCOLATE RASPBERRY DELICE</h1>
                <p>description text</p>
                </div>

                <div className="Menu-option">
                <h1> RASPBERRY WHITE CHOCOLATE</h1>
                <p>description text</p>
                </div>
                
                <div className="Menu-option">
                <h1>BLUEBERRY CREAM LAYERS</h1>
                <p>description text</p>
                </div>

                <div className="Menu-option">
                <h1>ECLAIR</h1>
                <p>description text</p>
                </div>


                
                <div className="Menu-option">
                <h1>FRESH STRAWBERRY ECLAIR</h1>
                <p>description text</p>
                </div>



                <div className="Menu-option">
                <h1>FRESH FRUIT TARTLET</h1>
                <p>description text</p>
                </div>

             </div>
    </div>


    )
}

export default Sweets