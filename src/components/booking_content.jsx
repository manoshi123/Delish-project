import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";


export default function booking_content() {
  return (
    <section className="booking_content">
<Container>
    <Row className="align-items-center">
        <Col md={7}>
        <div className="left_img">
<img src="/images/booking-img.png" alt="" className="img-fluid"/>
        </div>
        </Col>
        <Col md={5}>
        <div className="reserved_box mb-4">
<h4>Opening Hours</h4>
<span>Monday - Friday 09:00 - 22:00</span>
<span>Saturday-Sunday 11:00 - 00:00</span>
<span><b>* Happy hour17:00 - 21:00</b></span>
        </div>

          <div className="reserved_box">
<h4>Visit Hour Restaurant</h4>
<span>Silk St, Barbican, London E2Y, UK</span>
<span><NavLink href="#">+88-123-123456</NavLink></span>
<span><NavLink href="#">booking@delish.com</NavLink></span>
        </div>
        </Col>
    </Row>
</Container>
    </section>
  )
  }