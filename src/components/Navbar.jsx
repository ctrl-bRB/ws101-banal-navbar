import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [active, isActive] = useState(false);

    const handleNavClick = () => {
        isActive(false);
    }

    return (
        <div className="Navbar">
            <span className="nav-logo">
                <img src={"logo-header.png"} alt="Logo" />
            </span>

            <div className={`nav-items ${active && "switch"}`}>
                <Link to={"/"} onClick={handleNavClick}>Home</Link>
                <Link to={"/about"} onClick={handleNavClick}>About</Link>
                <Link to={"/contact"} onClick={handleNavClick}>Contact</Link>
            </div>

            <div className={`nav-toggle ${active && "switch"}`} 
                onClick={() => isActive(!active)}>
                <div className="hamburger"></div>
            </div>
        </div>
    );
}

export default Navbar;