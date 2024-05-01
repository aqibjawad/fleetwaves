import React from "react";

import { Container, Row, Col } from "react-bootstrap"

import "./home.css"

const OurMission = () => {
    return (
        <Container style={{ marginTop: '35rem' }}>
            <Row>
                <h1> Our Mission</h1>
                <Col className="mt-4 mission-col" sm={6}>
                    <img
                        className="mission-image"
                        src="https://img1.wsimg.com/isteam/ip/23f128ef-68c3-4b0a-a067-daef511d2136/business-people-conversation-technology-at-han.jpg/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.99%25/rs=w:1200,h:600,cg:true"
                        alt="Mission Image"
                    />
                </Col>

                <Col className="mt-4 mission-col" sm={6}>
                    <div className="ourmission">
                        At Our company Name Logistics, our commitment revolves around delivering superior logistics
                        services that surpass the expectations of our clients. We are dedicated to providing
                        swift, dependable, and budget-friendly solutions, allowing businesses to concentrate on
                        their core operations while our team of industry experts attends to their transportation
                        requirements.
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default OurMission