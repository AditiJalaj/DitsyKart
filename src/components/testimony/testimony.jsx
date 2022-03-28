import React from 'react';
import * as styles from './styles';

const TestimonyCard = () => (
  <div style={styles.testimonyCard}>
    <h4>TIESTO SINGH</h4>
    rating stars here
    <p>Good quality stuff. can't stop shopping. this my new addiction huh somebody save me. Thanks DitsyKart lv u max</p>
  </div>
);

function Testimony(props) {
  return (
    <div style={styles.testimonyContainer}>
      <h2>Thank you loving us</h2>
      <p>Thousands of happy shoppers</p>
      <div style={styles.testimonyCardContainer}>
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </div>
  );
}

export default Testimony;
