import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";

export default function Blog() {
  return (
    <section className="blog_sec">
        <Container>
       <div className="menu_content">
  <h6>CRISPY, EVERY BITE TASTE</h6>
  <h2>latest blogs insights</h2>
 
</div>

            <Row className="align-items-center">
            <Col md={4}>
              <div className="blog_box">
<img src="/images/blog1.jpg" className="img-fluid"/>
<div className="blog_content">
<h6>Food, flavour</h6>
<h3>Savoring Every Bite at The Rustic Fork</h3>
<div className="comment">
<NavLink to="/blog">02 Comments</NavLink>
<NavLink to="/blog"><img src="/images/Arrow-up.svg"/></NavLink>
</div>
</div>

              </div>
            </Col>
    
           <Col md={4}>
              <div className="blog_box">
<img src="/images/blog2.jpg" className="img-fluid"/>
<div className="blog_content">
<h6>healthy food</h6>
<h3>A Culinary Adventure Through the Hidden Gems of the City</h3>
<div className="comment">
<NavLink to="/blog">02 Comments</NavLink>
<NavLink to="/blog"><img src="/images/Arrow-up.svg"/></NavLink>
</div>
</div>
              </div>
            </Col>

           <Col md={4}>
              <div className="blog_box">
<img src="/images/blog3.jpg" className="img-fluid"/>
<div className="blog_content">
<h6>elegant</h6>
<h3>From First Sip to Final Bite: A Dining Experience to Remember</h3>
<div className="comment">
<NavLink to="/blog">02 Comments</NavLink>
<NavLink to="/blog"><img src="/images/Arrow-up.svg"/></NavLink>
</div>
</div>
              </div>
            </Col>
            </Row>
        </Container>

    </section>
  )
  }