import React from "react";
import { link } from 'react-router-dom';
import bread from "../images/Bread.jpg"
import bread2 from "../images/bread2.jpg"
import AppetizersPic from "../images/Appetizers-.jpg";
import MainsPic from "../images/Mains.jpg"
import Desserts from "../images/Desserts.jpg"

const Navigation = () =>{
    return(

    <section className="header-section">
        <div className="header-img">
            <div className="header-container">
            <div className="Header-title">
                <h3>LA LUNE FRENCH BISTRO</h3>
            </div>

            <div className="Main-header-text">
            <h1>A TASTE OF PARIS</h1>
            </div>
            <div className="button-div">
                <div className="button-container">
                <button className="header-button">Dine with Us</button>
                </div>

            </div>
            </div>
        </div>

        <div className="Booking-component">
            <div className="img-container">
            <div className="img1-booking">
            <img className="img" src= {bread}></img>
            
            </div>
            <div className="img2-booking">
            <img className="img" src={bread2}></img>

            </div>
            </div>

            <div className="Booking-container">
            <h1 className="booking-button-header">A French Fling</h1>
            <p className="booking-p">La Lune French Bistro was born from a love of all things Paris. Our founder and chef Ingrid Correa spent three amazing years in the City of Love, training under the industry's best. She brought home everything she learned - the flavors, the feelings, the family-style cafe - so that you can get a taste of Paris, too.</p>
         <link to = "/BookNow">
            <button className="booking-button">Book Now!</button>
            </link>
            </div>
        </div>

        <div className="Navigation-pages">
            <div className="nav-text">
                <h1>Flavors of France</h1>
                <p> Paris is a melting pot, as our food can attest. Take a bite and savor la vie delicieuse!</p>
            </div>

            <div className="nav-apps">
            <img src={AppetizersPic}></img>
            <p>Mouthwatering Appetizers</p>
            </div>
            <div className="nav-apps">
            <img src={MainsPic}></img>
            <p>Wholesome Mains</p>
            </div>
            <div className="nav-apps">
            <img src={Desserts}></img>
            <p>Sweet Endings</p>
            </div>
            
            {/*the P tags will need to be links later on. */}
        </div>

        <div className="Testiments">
            <div className="testiments-box">
            <div className="Testiment-text">
                <p>One bite and I felt like I was back in France. Chef Ingrid and her team have outdone themselves!</p>
                <p>One bite and I felt like I was back in France. Chef Ingrid and her team have outdone themselves!</p>
                <p>One bite and I felt like I was back in France. Chef Ingrid and her team have outdone themselves!</p>
            </div>
            </div>
        </div>

        <div className="Contact">
            <div className="contact-box">
            <div className="contact-img">
                <p>image would go on the left</p>
            </div>
                <div className="Contact-details">
                <h1>
                    SEE YOU SOON
                </h1>
                <p>
                    phone: 000.000.0000
                </p>
                <p> Email Address: 
                    Test@mail.com
                </p>
                <p>
                    Address:
                    1234 anywhere st. New York City, NY
                </p>
                </div>

            </div>
        </div>
    </section>
        
    )
}


export default Navigation
