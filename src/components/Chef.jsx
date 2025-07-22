import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";
export default function About() {
  return (
    <section className="chef_sec text-center">
      <Container>
        <div className="menu_content">
          <h6>make reservation</h6>
          <h2>Meet The Expert Chef</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <Row className="align-items-center pt-5">
          <Col md={4}>
            <div className="chef_box">
              <img src="/images/chef1.jpg" alt="" className="img-fluid"/>

              <h5>Steave Den</h5>
              <h6>Master chef</h6>
            </div>
          </Col>

         <Col md={4}>
            <div className="chef_box">
              <img src="/images/chef2.jpg" alt="" className="img-fluid"/>

              <h5>Steave Den</h5>
              <h6>Master chef</h6>
            </div>
          </Col>

          <Col md={4}>
            <div className="chef_box">
              <img src="/images/chef3.jpg" alt="" className="img-fluid"/>

              <h5>Steave Den</h5>
              <h6>Master chef</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
