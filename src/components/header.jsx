import { useState } from "react";
import { NavLink } from "react-router";
export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <div id="header">
        <div className="container header_wrap">
          <div className="logo">
            <NavLink href="#" className="text-uppercase">
             <img src="/images/header_logo.png" alt="logo" className="logo-img" />
            </NavLink>
          </div>
          {/* Hamburger Button */}
          <div className="open-nav-menu" onClick={toggleMenu}>
            <span />
          </div>


           {/* Overlay */}
          {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

           <nav className={`nav-menu d-lg-block ${menuOpen ? "active" : ""}`}>
            <div className="close-nav-menu" onClick={closeMenu}>
              <i className="fas fa-times" />
            </div>
            <ul className="menu fw-medium text-uppercase" style={{ listStyle: "none" }}>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/Menu" onClick={closeMenu}>Menu</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/Chef" onClick={closeMenu}>Chef</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/Blog" onClick={closeMenu}>Blog</NavLink>
              </li>
              <li className="menu-item menu-item-has-children">
                <NavLink to="/Contact" onClick={closeMenu}>Contact</NavLink>
              </li>
            </ul>
            {/* Mobile Button */}
            <div className="d-md-none d-sm-block">
              <div className="header_btn mobile_btn">
                <NavLink to="/booking" onClick={closeMenu}>
                  Book A Table
                  <i class="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
            </div>
          </nav>
          <div className="d-md-block d-sm-none d-none">
            <div className="header_btn">
                <NavLink to="/booking">
                  Book A Table
                  <img src="/images/arrow.svg" alt="arrow" />
                </NavLink>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
