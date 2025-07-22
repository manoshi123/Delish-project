import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <>
      <section className="banner">
        <Slider {...settings}>
          <div className="slider">
            <img src="/images/banner1.jpg" className="banner_img" />
            <div className="slider_content">
              <h3>Delicious</h3>
              <h1>Elevated Dining. Every Time.</h1>
              <h4>Part Of Us</h4>
              <div className="header_btn">
                <NavLink to="/booking">
                  Book A Table
                  <img src="/images/arrow.svg" alt="arrow" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="slider">
            <img src="/images/baaner2.jpg" className="banner_img" />
            <div className="slider_content">
              <h3>WELCOME</h3>
              <h1>Serving Joy on Every Plate</h1>
              <h4>Part Of Us</h4>
              <div className="header_btn">
                <NavLink href="#">
                  Book A Table
                  <img src="/images/arrow.svg" alt="arrow" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="slider">
            <img src="/images/banner3.jpg" className="banner_img" />
            <div className="slider_content">
              <h3>welcome</h3>
              <h1>Where Every Meal Becomes a Memory</h1>
              <h4>Part Of Us</h4>
              <div className="header_btn">
                <NavLink href="#">
                  Book A Table
                  <img src="/images/arrow.svg" alt="arrow" />
                </NavLink>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Hero;
