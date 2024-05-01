import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PlanPricing = () => {
  return (
    <div>

      <div id="back-image">
          <h1 className="text-center">
            Our Services
          </h1>

          <p>
            We are transport and strightforward in our price Model.
          </p>
      </div>

      <Container>
        <Row className="mt-4">
          <Col xs={12} sm={6} md={4} lg={4} className="mt-4">
            <img
              src="https://static.wixstatic.com/media/df457e_8a636978f3cb4171b5b3a2bd2c22c632~mv2.png/v1/crop/x_89,y_0,w_1237,h_2000/fill/w_296,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copia%20de%20Flat%20rate%20per%20load_%20(1).png"
              className="img-fluid"
              alt="Plan 1"
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mt-4">
            <img
              src="https://static.wixstatic.com/media/df457e_8a636978f3cb4171b5b3a2bd2c22c632~mv2.png/v1/crop/x_89,y_0,w_1237,h_2000/fill/w_296,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copia%20de%20Flat%20rate%20per%20load_%20(1).png"
              className="img-fluid"
              alt="Plan 2"
            />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mt-4">
            <img
              src="https://static.wixstatic.com/media/df457e_5ae7f8fe45b0433086835a269e7ac98d~mv2.png/v1/crop/x_94,y_0,w_1237,h_2000/fill/w_296,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copia%20de%20Flat%20rate%20per%20load_%20(2).png"
              className="img-fluid"
              alt="Plan 3"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlanPricing;
