import React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Menu_banner(props) {
  return (
    <section className="menu_banner text-center text-white" style={{ backgroundImage: `url(${props.src})`, }}>
      <Container>
        <div className="menu_content">
          <h1>{props.heading}</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#" className="active">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{props.breadcrumbitem}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </section>
    
  );
}