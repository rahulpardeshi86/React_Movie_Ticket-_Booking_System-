import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="netflix-footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-3">
            <h4 className="footer-logo">BOOKSHOW</h4>
            <p>
              Watch unlimited movies,shows and more.  
              Book tickets easily and enjoy entertainment.
            </p>
          </Col>

          <Col md={2} className="mb-3">
            <h6>Explore</h6>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h6>Help</h6>
            <ul>
              <li>FAQ</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6>Contact</h6>
            <p>Email: support@bookshow.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>

        <hr />

        <p className="text-center mb-0">
          © {new Date().getFullYear()}  All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};
