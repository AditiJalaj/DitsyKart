import React from 'react';
import HomePageBanner from '../../components/homepage_banner/homepage_banner';
import HomePageCards from '../../components/homepage_card/homepage_card';
import Testimony from '../../components/testimony/testimony';
import Features from '../../components/features/features';
const Home = () => {
  return (
    <>
      <HomePageBanner />
      <Features />
      <HomePageCards />
      <Testimony />
    </>
  );
};

export default Home;
