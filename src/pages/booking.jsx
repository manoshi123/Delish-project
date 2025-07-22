import React from 'react'
import Menu_banner from '../components/Menu-banner';
import Booking_form from '../components/Booking_form';
import Booking_content from '../components/booking_content';
import "../assets/css/booking.css";

const booking = () => {
  return (
    <>
  <Menu_banner src="/images/booking-bnr.jpg" heading="Book A Table" breadcrumbitem="Book A Table"/>
  <Booking_form/>
  <Booking_content/>
    </>
  )
}

export default booking