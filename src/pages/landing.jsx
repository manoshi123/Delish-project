import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import Menu from '../components/Menu';
import Clients from '../components/Clients';
import Banner from '../components/Banner';
import Chef from '../components/Chef';
import Counter from '../components/Counter';
import Blog from '../components/Blog';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const landing = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Service/>
    <Menu/>
    <Clients/>
    <Banner/>
    <Chef/>
    <Counter/>
    <Blog/>
    </>
  )
}

export default landing