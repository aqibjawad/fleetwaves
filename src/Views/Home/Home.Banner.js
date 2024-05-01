import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

const HomeBanner = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className="banner-title">
                        <span>
                            Embrace a seamless experience with our unparalleled services in America
                        </span>
                    </div>

                    <div className="banner-text">
                        <p>
                            Discover the most lucrative cargo opportunities in the industry. Acquire a personal dispatcher committed to your success, eliminating the
                            need for you to invest valuable time searching for loads or navigating through unproductive empty miles.
                        </p>
                    </div>

                    <div className="home-button-container">
                        <button className="home-button mt-3 mt-sm-0 ml-sm-3"> Hire a dispatcher Today</button>
                    </div>
                </Col>

                <Col sm={4}>
                    <img className="banner-image img-fluid" src="/images/truck1 image.webp" alt="Truck" />
                </Col>

            </Row>
        </Container>
    );
};

export default HomeBanner;
