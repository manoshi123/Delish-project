import React from 'react'
import Menu_banner from '../components/Menu-banner';
import All_menu from '../components/All_menu';
import "../assets/css/menu.css"

const Menu_page = () => {
  return (
    <>
    <Menu_banner src="/images/bg.jpg" heading="Our Menu" breadcrumbitem="Menu"/>
    <All_menu/>
    </>
  )
}

export default Menu_page