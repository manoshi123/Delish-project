import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";

export default function service() {

  return (
    <section className="service_sec">
<Container>
    <div className="service_content text-center">
 <h6>make reservation</h6>
    <h2>Our Restaurant Service</h2>
    <hr></hr>
    <img src="/images/dot.svg"/>
    </div>
   
    <Row className="align-items-center py-5">
      <Col md={4}>
        <div className="service_box">
         <img src="/images/service1.jpg" alt="service1" className="img-fluid"/>
          <h6>Wedding Service</h6>
          <p>Celebrate your special day in a refined setting with tailored menus, elegant decor, and attentive service that makes every moment unforgettable.</p>
         <div className="service_btn">
                <NavLink href="#">
                  Read More
                  <i class="fa-solid fa-arrow-right-long"></i>
                  
                </NavLink>
              </div>
        </div>
      </Col>

      <Col md={4}>
        <div className="service_box">
         <img src="/images/service2.jpg" alt="service1" className="img-fluid"/>
          <h6>Buffet Service</h6>
          <p>From appetizers to desserts, the buffet is packed with crowd-pleasing favorites perfect for families, friends, and large groups.</p>
         <div className="service_btn">
                <NavLink href="#">
                  Read More
                  <i class="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
        </div>
      </Col>

      <Col md={4}>
         <div className="service_box">
         <img src="/images/service3.jpg" alt="service1" className="img-fluid"/>
          <h6>Wedding Service</h6>
          <p>Experience refined service, thoughtfully plated dishes, and a relaxed yet elegant setting designed for memorable meals.</p>
         <div className="service_btn">
                <NavLink href="#">
                  Read More
                  <i class="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
        </div>
      </Col>
    </Row>
</Container>
        
    </section>
  )
}