import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { NavLink } from "react-router";

export default function Contact_form() {
  return (
    <section className="form_sec">
      <Container>
        <Row>
          <Col md={5}>
            <div className="contact_box">
              <h3>Office Information</h3>
              <p>
                Completely recapitalize 24/7 communities via standards compliant
                metrics whereas.
              </p>
              <div className="contact_wrap d-flex align-items-center border-bottom border-1">
                <div className="contact_icon">
                    <img src="/images/call_icon.svg"/>
                </div>
                <div className="contact_text">
<h4>Phone Number & Email</h4>
<span><NavLink href="#">+88-123-123456</NavLink></span>
<span><NavLink href="#">booking@delish.com</NavLink></span>
                </div>
              </div>
              <div className="contact_wrap d-flex align-items-center border-bottom border-1">
                <div className="contact_icon">
                    <img src="/images/location.svg"/>
                </div>
                <div className="contact_text">
<h4>Our Office Address</h4>
<span>Silk St, Barbican, London E2Y, UK</span>

                </div>
              </div>
              <div className="contact_wrap d-flex align-items-center">
                <div className="contact_icon">
                    <img src="/images/time.svg"/>
                </div>
                <div className="contact_text">
<h4>Official Work Time</h4>
<span>Monday - Friday 09:00 - 22:00</span>
<span>Saturday-Sunday 11:00 - 00:00</span>
<span><b>* Happy hour17:00 - 21:00</b></span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <div className="contact_box">
              <h3>Leave a Message</h3>
              <p>
                Have a question about the our service? We're here to<br/> help,
                contact us today
              </p>
              <Form>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Enter your name" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="Enter your email address" />
                </FloatingLabel>

                
                <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                  <Form.Control type="tel" placeholder="Enter your phone number" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Type Your Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "120px",resize: 'none' }}
                  />
                </FloatingLabel>
                 <Button variant="primary" type="submit">
        Submit Message <i class="fa-solid fa-arrow-right-long"></i>
      </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
