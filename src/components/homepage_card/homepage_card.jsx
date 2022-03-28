import React from 'react';
import PUMA from '../../assets/homepage/brands/puma.gif';
import * as styles from './styles';

//add redacted state or shimmer for gifs loading
const HomePageCard = () => {
  return <img style={styles.brandGif} src={PUMA} />;
};

function HomePageCards(props) {
  return (
    <>
      <h2>SHOP YOUR FAVOURITE BRANDS</h2>
      <HomePageCard />
      <HomePageCard />
      <HomePageCard />
      <HomePageCard />
    </>
  );
}

export default HomePageCards;
