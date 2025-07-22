import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";
export default function About() {
  return (
    <section className="about_sec">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="left_img">
              <img
                src="/images/about-img.png"
                alt="about"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <div className="right_content">
              <h6>make reservation</h6>
              <h2>
                Enjoy An Exceptional
                <br />
                Journey of Taste
              </h2>
              <p>
                Since opening our doors, we've been dedicated to serving
                delicious meals made from fresh, high-quality ingredients.
                Whether you're here for a casual bite or a special celebration,
                we strive to create memorable dining experiences for every
                guest. Our menu features a mix of timeless favorites and
                exciting new flavors—all crafted with care and passion.
              </p>
              <div className="about_btn">
                <NavLink to="/booking">
                  Book A Table
                  <img src="/images/arrow.svg" alt="arrow" />
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
