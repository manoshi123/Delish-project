import React from 'react'
import Menu_banner from '../components/Menu-banner';
import Chef_content from '../components/Chef_content';
import Chef from '../components/Chef';
import "../assets/css/chef.css"

const chef_page = () => {
  return (
    <>
  <Menu_banner src="/images/chef_banner.jpg" heading="Meet Our Chef" breadcrumbitem="Chef"/>
  <Chef_content/>
  <Chef/>
    </>
  )
}

export default chef_page