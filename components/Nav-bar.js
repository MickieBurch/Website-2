import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{

return (
<div className="nav-bar">
    <li>
        <Link to = "/"> Home
        </Link>
    </li>

    <li>
    <Link to = "/Appetizers"> Appetizers
    </Link>
    </li>


    <li>
    <Link to = "/mains"> Mains
    </Link>
    </li>

    <li>
    <Link to = "/Sweets"> Sweets
    </Link>
    </li>
</div>
);
}

export default NavBar