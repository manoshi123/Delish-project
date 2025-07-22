import React from 'react'
import Menu_banner from '../components/Menu-banner';
import "../assets/css/contact.css";
import Map_sec from '../components/Map_sec';
import Contact_form from '../components/Contact_form';

const contact = () => {
  return (
    <>
  <Menu_banner src="/images/contact-bnr.jpg" heading="CONTACT" breadcrumbitem="CONTACT"/>
  <Map_sec/>
  <Contact_form/>
    </>
  )
}

export default contact