import React from "react";

import './footer.css'

import { Row, Col } from "react-bootstrap"

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const DesktopFooter = () => {
    return (
        <div id="footer" className="fotter">
            <Row>
                <Col>
                    <div className="footer-title">
                        Always loaded <br /> and profitable
                    </div>

                    <div className="socialmedia-fotter">
                        <h2>
                            Follow Us on
                        </h2>

                        <span className="facebook-footer">
                            <FaFacebook />
                        </span>

                        <span className="insta-footer">
                            <FaInstagram />
                        </span>

                    </div>

                    <div class="button-container">
                        <button class="fotter-button"> Affiliate Program </button>
                    </div>
                </Col>

                <Col>
                    <div className="footer-links">
                        <span >
                            Home
                        </span>

                        <span className="footer-plan">
                            Plan and Pricing
                        </span>
                    </div>

                    <div className="email">

                        <span className="footer-email">
                            info@gmail.com
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DesktopFooter