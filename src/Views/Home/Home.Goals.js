import React from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";

const HomeGoal = () => {
    return (
        <div className="home-goal" id="homegoal">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <Card className="mb-3 mt-3">
                            <Card.Body>
                                <Card.Title className="goal-title">
                                    Tell us about your goals <br /> and let us help
                                </Card.Title>
                                <Card.Text className="goal-text">
                                    Gaining insight into your company's requirements, hauling plans, and aspirations allows us to tailor the most effective dispatch service solution for your trucking enterprise. Take the initial step by completing the form now, initiating your journey with us today!
                                </Card.Text>
                                <Form>
                                    <Form.Group controlId="formEmail1" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail2" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail3" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail4" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        {/* Your other content here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeGoal;
