import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from "react-router";

export default function About() {
  return (
    <section className="menu_sec text-center">
      <Container>
         <div className="menu_content text-center">
 <h6>make reservation</h6>
    <h2>Our delicious menu</h2>
    <hr></hr>
    <img src="/images/dot_red.svg"/>
    </div>
       <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 mt-5"
    >
      <Tab eventKey="home" title="Breakfast">
        <Row className="pt-5">
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu1.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
              <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu2.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu3.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu5.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu6.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu7.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu8.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu9.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="profile" title="Lunch">
       <Row className="pt-5">
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu1.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
              <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu2.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu3.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu5.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu6.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu7.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu8.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu9.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="contact" title="Dinner">
        <Row className="pt-5">
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu1.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
              <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu2.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu3.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu5.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu6.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu7.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu8.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="menu_box">
              <div className="menu_img">
                <img
                  src="/images/menu9.jpg"
                  alt="about"
                  className="img-fluid"
                />
                <div className="text_hover">
<NavLink to="/Menu">View Menu</NavLink>
                </div>
              </div>
             <img src="/images/star.svg" alt="star" className="pt-3"/>
              <h5>Beef Bourguignon</h5>
              <h6>$15.00</h6>
            </div>
          </Col>
        </Row>
      </Tab>
    </Tabs>
      </Container>
    </section>
  );
}
