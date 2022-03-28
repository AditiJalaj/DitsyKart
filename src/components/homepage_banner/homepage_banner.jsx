import React from 'react';
import HOMEPAGE_BANNER from '../../assets/homepage_banner.jpg';
import * as bannerStyles from './styles';

const HomePageBanner = () => {
  return (
    <div>
      <img style={bannerStyles.banner} src={HOMEPAGE_BANNER} alt='homepage banner' />
    </div>
  );
};

export default HomePageBanner;
