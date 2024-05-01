import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomePapers = () => {
    return (
        <div style={{backgroundColor:'#F0DAC2', marginTop:'3rem'}} id="home-papers">
            <Container>
                <h1 className='mt-5 text-center'>Getting Started is Easy</h1>
                <Row className="justify-content-center">
                    <Col xs={12} md={4}>
                        <Card className="mb-3">
                            <Card.Img className='svg-paper' src="/svgs/svgexport-13.svg" alt="Send Documents" />
                            <Card.Body>
                                <Card.Title>Send Documents</Card.Title>
                                <Card.Text>
                                    MC Authority, Certificate of Insurance and W-9 Form
                                </Card.Text>
                                <Button variant="primary" block>Hire a dispatcher Today</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mb-3">
                            <Card.Img className='svg-paper' src="/svgs/svgexport-14.svg" alt="Sign Agreement" />
                            <Card.Body>
                                <Card.Title>Sign Agreement</Card.Title>
                                <Card.Text>
                                    Sign a quick and easy dispatch service level agreement.
                                </Card.Text>
                                <Button variant="primary" block>Hire a dispatcher Today</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mb-3">
                            <Card.Img className='svg-paper' src="/svgs/svgexport-15.svg" alt="Hit the road" />
                            <Card.Body>
                                <Card.Title>Hit the road</Card.Title>
                                <Card.Text>
                                    We start dispatching your truck immediately.
                                </Card.Text>
                                <Button variant="primary" block>Hire a dispatcher Today</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePapers;
