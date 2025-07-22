import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function chef_content() {
  return (
    <section className="chef_content pt-5">
<Container>
    <Row className="align-items-center pt-5">
        <Col md={5}>
        <img src="/images/chef_left-img.png" className="img-fluid"/>
        </Col>
         <Col md={{ span: 6, offset: 1 }}>
        <h5>35 year of experience</h5>
        <h2>Award Winning Chef</h2>
        <p>At our restaurant, we celebrate the rich, comforting flavors of seasonal ingredients—and butternut pumpkin is a true favorite. Our chefs craft each dish with care, using locally sourced produce to highlight the natural sweetness and velvety texture of this versatile ingredient. From hearty soups and roasted sides to innovative mains, every pumpkin dish is a blend of tradition and creativity. It's more than just food; it's a warm, flavorful experience that captures the essence of our kitchen’s philosophy: fresh, honest, and full of soul.</p>
        <img src="/images/sign.svg" alt="sign"/>
        <h6><span>Henry</span> - EXCUTIVE CHEF</h6>
        </Col>
    </Row>
</Container>
    </section>
  )
  }