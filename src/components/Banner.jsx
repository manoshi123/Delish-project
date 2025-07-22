import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";

export default function Banner() {
  return (
    <section className="banner_btm text-white">
      <Container>
       <div className="menu_content text-center">
          <h6>Book A Table</h6>
          <h2 className="text-white">RESERVE NOW YOUR TABLE AND <br/>
ENJOY DINING EXPERIENCE.</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <div className="banner_text text-center">
            <h5>Opening Hours</h5>
            <p>Open : 09:00 am - 01:00 pm</p>
            <NavLink href="#">booking@delish.com</NavLink>
            <h6>Booking Request :<NavLink href="#">+88-123-123456</NavLink></h6>
            </div>
          <div className="banner_btn2">
            <NavLink to="/booking">
              Book A Table
           
            </NavLink>
          </div>
       
      </Container>
    </section>
  )
  }