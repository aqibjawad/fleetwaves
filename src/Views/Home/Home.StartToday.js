import React, { useState } from 'react';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import "./home.css";

const HomeStartToday = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='start-today start-today-animation'>
                <Container>
                    <Row className="align-items-center">
                        <Col sm={6} className="animate-left">
                            <div className='today-title'>
                                <p>Hit the road on your terms, you're the boss</p>
                            </div>

                            <div className='today-para'>
                                <p>
                                    Empower yourself with the freedom to choose your loads, rates, and routes without any coercion. Our commitment is to secure the optimal freight at competitive rates, ensuring timely payments for your services. Transparency is our priority, with upfront disclosure of documentation, prices, and fees
                                </p>
                                <p>To receive SMS notifications from us, we require your email address.</p>
                            </div>

                            <Row>
                                <Col sm={7}>
                                    <input type="email" className="custom-input" placeholder="example@email.com" />
                                </Col>
                                <Col sm={5}>
                                    <div className="home-today-container">
                                        <button className="home-today" onClick={handleShow}>Start Today</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={6} className="animate-right">
                            <div className='start-today-image'>
                                <img src="/images/truck 4.jpg" alt="Truck" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>

                <Modal show={show} onHide={handleClose} animation={true} className="modal-fade" >
                    <Modal.Header closeButton>
                        <Modal.Title> Write to Start Dispatch </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal Content</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default HomeStartToday;
