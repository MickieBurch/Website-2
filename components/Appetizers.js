import React from "react";
import { Link } from "react-router-dom"

export const Appetizers = () =>{
    return(

    <div className="Menu-container">
          <Link to="/">
        <button>HOME</button>
        </Link>
        <div className="Appatizers-header">
            <h1> Bread & Pastries</h1>
        </div>
        <div className="Appatizers-container">
                <div className="Menu-option">
                <h1>Croissants</h1>
                <p>PAIN AU CHOCOLATE</p>
                <p>RASPBERRY CROISSANTE</p>
                <p>APPLE CROISSANT</p>
                <p>CINNAMON CROISSANT</p>
                <p>STRAWBERRY CROISSANT</p>
                <p>TWICE BAKED ALMOND CROISSANT</p>

                </div>

                <div className="Menu-option">
                <h1>Bread</h1>
                <p>BAGUETTE</p>
                <p>PAIN DE CAMPAGNE</p>
                <p>CHALLAH</p>
                <p>BRIOCHE LOAF</p>
                <p>BRIOCHE BALL</p>
                <p>WHOLE WHEAT</p>

                </div>
                
                <div className="Menu-option">
                <h1>Pastries</h1>
                <p>BEAR CLAW</p>
                <p>CINNAMON ROLL</p>
                <p>DANISH</p>
                <p>PALMIER</p>
                <p>STRUDEL</p>
                
                </div>
             </div>
    </div>


    )
}
export default Appetizers