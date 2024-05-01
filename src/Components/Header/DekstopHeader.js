import React from "react"

import { Link } from "react-router-dom"



import "./header.css"

const DesktopHeader = () => {
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="your-logo-image.jpg" alt="Logo" />
            </div>

            <ul class="nav-links">

                <li><a href="/">Home</a></li>
                
                <Link to="/planandpricing">
                    Plan and Pricing
                </Link>

                <Link to="/services">
                    Services
                </Link>

                <Link to="/affiliate">
                    Affiliate Program
                </Link>
            </ul>

            <div class="button-container">
                <button class="nav-button">Get Started</button>
            </div>
        </nav>
    )
}

export default DesktopHeader