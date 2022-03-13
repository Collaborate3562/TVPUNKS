import React from 'react';
import './index.css';
import { MyNavBar } from "../../components/MyNavBar";
import { HomeHero } from "../../components/HomeHero";
import { RoadMap } from '../../components/RoadMap';
import { Story } from '../../components/Story';
import { Faq } from '../../components/Faq';
import { Footer } from '../../components/Footer';

const NewPage = () => {
  return (
    <div style={{background: 'white'}}>
      <MyNavBar />
      <HomeHero />
      <RoadMap />
      <Story />
      <Faq />
      <Footer />
    </div>
  )
}

export default NewPage;
