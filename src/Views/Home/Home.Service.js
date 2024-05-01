import React from "react";

import { Row, Col } from "react-bootstrap"

import "./home.css"

const HomeService = () => {
    return (
        <div className="home-service" id="homeservice">
            <div>
                <span className="mt-4 service-title">
                    What is truck distapch service?
                </span>
            </div>

            <div className="service-text">
                <span>
                    A truck dispatch services help truck drivers and owner operators who have their own trucking company
                    manage the load booking and back-office processes of running a trucking company. Some dispatchers
                    specialize only in booking loads, while others, like Genius Dispatch, offer a wide variety of services
                    such as invoice management and detention requests
                </span>
            </div>

            <div class="">
                <button class="service-button"> Hire a dispatcher Today</button>
            </div>
        </div>
    )
}

export default HomeService