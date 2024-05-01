import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceReport = () => {
  return (
    <Container
      id="servicereport"
      style={{ backgroundColor: "#EDEBEB", marginBottom: "2rem", marginTop: "2rem" }}
    >
      <Row className="gx-3">
        <Col sm={12} md={4} className="mt-4">
          <div className="card">
            <h2>IFTA Reporting</h2>
            <p>
              Our IFTA preparation and filing services help trucking companies streamline the process of reporting and paying fuel taxes across multiple jurisdictions. We provide expert assistance with accurate calculation, preparation, and filing of IFTA reports while ensuring compliance with all applicable rules and regulations.
            </p>
            <div className="service-button-container">
              <button className="service-button">Select</button>
            </div>
          </div>
        </Col>

        <Col sm={12} md={4} className="mt-4">
          <div className="card">
            <h2>IFTA Reporting</h2>
            <p>
              Our IFTA preparation and filing services help trucking companies streamline the process of reporting and paying fuel taxes across multiple jurisdictions. We provide expert assistance with accurate calculation, preparation, and filing of IFTA reports while ensuring compliance with all applicable rules and regulations.
            </p>
            <div className="service-button-container">
              <button className="service-button">Select</button>
            </div>
          </div>
        </Col>

        <Col sm={12} md={4} className="mt-4">
          <div className="card">
            <h2>IFTA Reporting</h2>
            <p>
              Our IFTA preparation and filing services help trucking companies streamline the process of reporting and paying fuel taxes across multiple jurisdictions. We provide expert assistance with accurate calculation, preparation, and filing of IFTA reports while ensuring compliance with all applicable rules and regulations.
            </p>
            <div className="service-button-container">
              <button className="service-button">Select</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceReport;
