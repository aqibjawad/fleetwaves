import React from "react";

import {Container, Col, Row} from "react-bootstrap"

import "./home.css"

const HomeTruckDispatch =()=>{
    return(
        <Container className="mt-5" id="truck-dispatch"> 
            <Row>
                <Col>
                    <div className="truck-dispatch-title">
                        <p>
                            Top dedicated truck <br /> dispatch service
                        </p>
                    </div>

                    <div className="truck-dispatch-text">
                        <p>
                            As dedicated truck dispatchers offering comprehensive freight dispatching services, we operate on a modest percentage of your rate. 
                            This serves as a motivating factor for us to actively negotiate and secure high rates on your behalf. Your success directly correlates
                             with ours – the more revenue you generate, the more we both prosper.
                        </p>
                    </div>

                    <div class="truck-dispatcher-container">
                        <button class="truck-dispatcher"> Hire a dispatcher Today</button>
                    </div>
                </Col>

                <Col>
                    <img className="truck-dispatch-image" 
                    src="/images/callcentergirl.jpg" />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeTruckDispatch