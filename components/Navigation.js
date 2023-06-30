import React from "react";
import bread from "../images/Bread.jpg"
import bread2 from "../images/bread2.jpg"
import AppetizersPic from "../images/Appetizers-.jpg";
import MainsPic from "../images/Mains.jpg"
import Desserts from "../images/Desserts.jpg"
import Bakery from '../images/Bakery.jpg'
import { Link } from 'react-router-dom';


export const Navigation = () =>{
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
         
            <a href="https://minimoments.resos.com/booking" target="_blank" rel="booking link">
                  <button className="booking-button">Book Now</button>
            </a>

            
            </div>
        </div>

        <div className="Navigation-pages">
            <div className="nav-text">
                <h1>Flavors of France</h1>
                <p> Paris is a melting pot, as our food can attest. Take a bite and savor la vie delicieuse!</p>
            </div>

            <div className="nav-apps">
            <img className="nav-img" src={AppetizersPic}></img>
            <Link to="/Appetizers">
            <p>Mouthwatering Appetizers</p>
            </Link>
            </div>
            <div className="nav-apps">
            <img className="nav-img"src={MainsPic}></img>
            <Link to="/Mains">
            <p>Wholesome Mains</p>
            </Link>
            </div>
            <div className="nav-apps">
            <img className="nav-img"  src={Desserts}></img>
            <Link to="/Sweets">
            <p>Sweet Endings</p>
            </Link>
            </div>
            
            {/*the P tags will need to be links later on. */}
        </div>

        <div className="Testiments">
            <div className="testiments-box">
            <div className="testiment-header"> <h1> LOVE FOR LA LUNE</h1></div>
            <div className="Testiment-textbox">
                <div className="tetiments-1">
                <h1 className="Testiment-label"> Transported to Paris</h1>
                <p className="Testiment-text">One bite and I felt like I was back in France. Chef Ingrid and her team have outdone themselves!</p>
                </div>
                <div className="testiments-2">
                <h1 className="Testiment-label"> Lovely Bistro</h1>
                <p className="Testiment-text">The ambience was great - and the food even better! Simple recipes done well, with top-notch ingredients. Will be back!</p>
                </div>
                <div className="testiments-3">
                <h1 className="Testiment-label"> Transported to Paris</h1>
                <p className="Testiment-text">Eating here made me miss Paris so much. What a treat! I will be bringing my client meetings here. </p>
                </div>

            </div>
            </div>
        </div>

        <div className="Contact">
            <div className="contact-box">
            <div className="contact-imgbox">
                <img className="contact-img" src={Bakery}></img>
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

        <div className="footer">
            <div className="footer-space">

            </div>
        </div>
    </section>
        
    )
}


export default Navigation