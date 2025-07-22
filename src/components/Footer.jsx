import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";
export default function Footer() {
  return (
<footer>
    <div className="page_footer">
<Container>

    <Row>
        <Col md={3}>
        <div className="footer_box first_box">
<h6>Get In Touch</h6>
        <p className="pt-4">Silk St, Barbican, London E2Y, UK</p>
        <NavLink href="#">+88-123-123456</NavLink>
        <NavLink href="#">booking@delish.com</NavLink>

        <ul className="footer_icon d-flex">
<li><NavLink href="#"><i class="fa-brands fa-facebook-f"></i></NavLink></li>
<li><NavLink href="#"><i class="fa-brands fa-twitter"></i></NavLink></li>
<li><NavLink href="#"><i class="fa-brands fa-linkedin-in"></i></NavLink></li>
<li><NavLink href="#"><i class="fa-brands fa-instagram"></i></NavLink></li>
        </ul>
        </div>
        
        </Col>
            <Col md={3}>
        <div className="footer_box">
<h6>Food Menu</h6>
        <ul className="footer_list pt-4">
            <li><i class="fa-solid fa-arrow-right-long"></i> <NavLink href="#">White Castle</NavLink></li>
            <li><i class="fa-solid fa-arrow-right-long"></i> <NavLink href="#">Beef Sandwich</NavLink></li>
            <li><i class="fa-solid fa-arrow-right-long"></i> <NavLink href="#">Cherry Limeade</NavLink></li>
            <li><i class="fa-solid fa-arrow-right-long"></i> <NavLink href="#">Wendy’s Frosty</NavLink></li>
            <li><i class="fa-solid fa-arrow-right-long"></i> <NavLink href="#">Pumpkin Spice</NavLink></li>
        </ul>
        
        </div>
        
        </Col>
            <Col md={3}>
        <div className="footer_box">
<h6>Working Hours</h6>
        <p className="pt-4">Monday - Friday09:00 - 22:00</p>
        <p>Saturday11:00 - 00:00</p>
        <p>Sunday11:00 - 23:00</p>

        <span>* Happy hour17:00 - 21:00</span>
        </div>
        
        </Col>
            <Col md={3}>
        <div className="footer_box">
<h6>Instagram</h6>
        <div className="footer_img pt-4">
<div><img src="/images/footer_img1.jpg" alt=""/></div>
<div><img src="/images/footer_img2.jpg" alt=""/></div>
<div><img src="/images/footer_img3.jpg" alt=""/></div>
<div><img src="/images/footer_img4.jpg" alt=""/></div>
<div><img src="/images/footer_img5.jpg" alt=""/></div>
<div><img src="/images/footer_img6.jpg" alt=""/></div>
        </div>
        </div>
        
        </Col>
    </Row>
</Container>

    </div>
    <div className="bottom_footer text-white">
<Container>
    <div className="btm_content d-flex justify-content-between">
<p>© Copyright Delish. All Rights Reserved.</p>

<ul className="btm_list d-flex gap-4">
<li><NavLink href="#">Terms of use</NavLink></li>
<li><NavLink href="#">Privacy Policy</NavLink></li>
</ul>
    </div>
</Container>
    </div>
    </footer>
  )
  }