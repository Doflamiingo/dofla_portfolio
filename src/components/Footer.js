import { Container, Row, Col } from "react-bootstrap";

import logo from "../logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <p>Contactez moi via mes réseaux </p>
              <a
                href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://www.facebook.com/raphael.raguette/"
                target="_blank"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/dreaam_chaser/"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
