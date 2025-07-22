import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function All_menu() {
  return (
    <section className="all_menu">
  <Container>
   
    <Row className="pt-5 align-items-center">
          <div className="menu_content text-center pb-5">
          <h6>STARTER MENU</h6>
          <h2>Appetizers</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
      <Col md={7}>
        <img src="/images/menu_img1.jpg" className="img-fluid menu_img" alt="Greek Salad" />
      </Col>
      <Col md={5}>
        <div className="menu_details">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Greek Salad</h5>
            <div className="menu_border"></div>
            <h6>$15.00</h6>
          </div>
          <p>
            Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Lasagne</h5>
            <div className="menu_border border1"></div>
            <h6>$25.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Butternut Pumpkin</h5>
            <div className="menu_border border2"></div>
            <h6>$40.00</h6>
          </div>
          <p>
            Roast butternut pumpkin with olive oil, garlic, and rosemary for a simple, savory side.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tokusen Wagyu</h5>
            <div className="menu_border border3"></div>
            <h6>$38.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="pt-5 align-items-center">
         <div className="menu_content text-center pb-5">
          <h6>Delicious</h6>
          <h2>Main Dishes</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <Col md={5}>
        <div className="menu_details">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Greek Salad</h5>
            <div className="menu_border"></div>
            <h6>$15.00</h6>
          </div>
          <p>
            Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Lasagne</h5>
            <div className="menu_border border1"></div>
            <h6>$25.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Butternut Pumpkin</h5>
            <div className="menu_border border2"></div>
            <h6>$40.00</h6>
          </div>
          <p>
            Roast butternut pumpkin with olive oil, garlic, and rosemary for a simple, savory side.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tokusen Wagyu</h5>
            <div className="menu_border border3"></div>
            <h6>$38.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
          </p>
        </div>
      </Col>
      <Col md={7}>
        <img src="/images/menu_img2.jpg" className="img-fluid menu_img" alt="Greek Salad" />
      </Col>
      
    </Row>
     <Row className="pt-5 align-items-center">
          <div className="menu_content text-center pb-5">
          <h6>Delicious</h6>
          <h2>Desserts</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
      <Col md={7}>
        <img src="/images/menu_img3.jpg" className="img-fluid menu_img" alt="Greek Salad" />
      </Col>
      <Col md={5}>
        <div className="menu_details">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Greek Salad</h5>
            <div className="menu_border"></div>
            <h6>$15.00</h6>
          </div>
          <p>
            Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Lasagne</h5>
            <div className="menu_border border1"></div>
            <h6>$25.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Butternut Pumpkin</h5>
            <div className="menu_border border2"></div>
            <h6>$40.00</h6>
          </div>
          <p>
            Roast butternut pumpkin with olive oil, garlic, and rosemary for a simple, savory side.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tokusen Wagyu</h5>
            <div className="menu_border border3"></div>
            <h6>$38.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
          </p>
        </div>
      </Col>
    </Row>
     <Row className="pt-5 align-items-center">
         <div className="menu_content text-center pb-5">
          <h6>Delicious</h6>
          <h2>Drinks</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <Col md={5}>
        <div className="menu_details">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Greek Salad</h5>
            <div className="menu_border"></div>
            <h6>$15.00</h6>
          </div>
          <p>
            Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Lasagne</h5>
            <div className="menu_border border1"></div>
            <h6>$25.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Butternut Pumpkin</h5>
            <div className="menu_border border2"></div>
            <h6>$40.00</h6>
          </div>
          <p>
            Roast butternut pumpkin with olive oil, garlic, and rosemary for a simple, savory side.
          </p>
        </div>
         <div className="menu_details pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Tokusen Wagyu</h5>
            <div className="menu_border border3"></div>
            <h6>$38.00</h6>
          </div>
          <p>
            Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
          </p>
        </div>
      </Col>
      <Col md={7}>
        <img src="/images/menu_img4.jpg" className="img-fluid menu_img" alt="Greek Salad" />
      </Col>
      
    </Row>
  </Container>
</section>
  )
  }