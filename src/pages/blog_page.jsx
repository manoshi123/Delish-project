import React from 'react'
import Menu_banner from '../components/Menu-banner';
import Blog_details from '../components/blog_details';
import "../assets/css/blog.css";

const blog_page = () => {
  return (
    <>
  <Menu_banner src="/images/blog_bg.jpg" heading="BLOG" breadcrumbitem="BLOG"/>
  <Blog_details/>
    </>
  )
}

export default blog_page