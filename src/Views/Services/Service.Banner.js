import React from "react";

import { Container } from "react-bootstrap"

import "./service.css"

const ServiceBanner =()=>{
    return(
        <Container id="services">
            <div className="service-banner text-center mb-5">
                Streamline Your Operations with Our  Comprehensive FMCSA & DOT Compliance  Solutions.
            </div>

            <div className="servicees-text">
                Ensuring FMCSA (Federal Motor Carrier Safety Administration) and DOT (Department of Transportation) compliance is critical for your trucking company 
                to operate legally and safely. Our comprehensive compliance solutions streamline your operations by providing expert guidance on everything from driver 
                qualification to vehicle maintenance, electronic logging devices (ELDs), and more.
            </div>

            <div className="servicees-text mt-3">
                We keep up with the latest regulations and help you stay compliant, minimizing the risk of fines, penalties, and other consequences. With our services,
                 you can focus on your core business while we handle all your FMCSA and DOT compliance needs.
            </div>
        </Container>
    )
}

export default ServiceBanner