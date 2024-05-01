import React from "react";

import { Row, Col, Container } from "react-bootstrap"

const WhatWeDo = () => {

    return (
        <div id="whatwedo" className="what-we">
            <Container>
                <Row>
                    <Col sm={6} className="left-animated-column">
                        <div>
                            <p>What Done Truck Dispatching Include</p>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries
                            </span>
                            <svg width="443" height="116"> <a href="https://resolute-logistics.com/img/svg/sprite.svg#what-we-do-svg"></a> </svg>
                        </div>
                    </Col>

                    <Col sm={6} className="animated-column mt-5">
                        <div className="d-flex column">
                            <div className="number">01</div>
                            <div className="text mt-1">Personal Touch</div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">02</div>
                            <div className="text mt-1"> Brokers Background </div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">03</div>
                            <div className="text mt-1"> Company Development </div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">04</div>
                            <div className="text mt-1"> Planning Ahead </div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">05</div>
                            <div className="text mt-1"> Handling PaperWork </div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">06</div>
                            <div className="text mt-1"> Support 24/7 </div>
                        </div>

                        <div className="d-flex column">
                            <div className="number">07</div>
                            <div className="text mt-1"> Current Vacancies </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhatWeDo