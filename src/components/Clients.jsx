import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

export default function Clients() {
  return (
    <section className="clients_sec">
      <Container>
        <div className="menu_content text-center">
          <h6>Client Testimonial</h6>
          <h2>Our Customer Feedbacks</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <Slider {...settings}>
          <div className="client_slider">
            
            <div className="client_text">
              <p>
                As someone who watches what I eat, I appreciated the healthy
                options on the menu. The quinoa bowl with grilled chicken was
                delicious and satisfying without being heavy. Loved it!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client1.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Sofia Grace </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
           <div className="client_slider">
            
            <div className="client_text">
              <p>
                Celebrated my birthday here and it couldn’t have gone better! The staff was incredibly attentive, the food came out fast despite our big group, and every dish was a hit. Thank you for making it special!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client2.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Rafael Alejandro </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
          <div className="client_slider">
            
            <div className="client_text">
              <p>
                As someone who watches what I eat, I appreciated the healthy
                options on the menu. The quinoa bowl with grilled chicken was
                delicious and satisfying without being heavy. Loved it!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client1.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Sofia Grace </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
         <div className="client_slider">
            
            <div className="client_text">
              <p>
                Celebrated my birthday here and it couldn’t have gone better! The staff was incredibly attentive, the food came out fast despite our big group, and every dish was a hit. Thank you for making it special!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client2.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Rafael Alejandro </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
           <div className="client_slider">
            
            <div className="client_text">
              <p>
                As someone who watches what I eat, I appreciated the healthy
                options on the menu. The quinoa bowl with grilled chicken was
                delicious and satisfying without being heavy. Loved it!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client1.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Sofia Grace </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
          <div className="client_slider">
            
            <div className="client_text">
              <p>
                Celebrated my birthday here and it couldn’t have gone better! The staff was incredibly attentive, the food came out fast despite our big group, and every dish was a hit. Thank you for making it special!
              </p>
            </div>

            <div className="client_info d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="user_img">
                  <img src="images/client2.svg" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="user_name">Rafael Alejandro </h5>
                  <span className="user_location">Food Reviewer</span>
                </div>
              </div>
              <div className="coma">
                <img src="images/quote.svg" alt=""></img>
                </div>
            </div>
            
          </div>
        </Slider>
      </Container>
    </section>
  );
}
