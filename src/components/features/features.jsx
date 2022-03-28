import React from 'react';
import { GiIndiaGate } from 'react-icons/gi';
import { BsTruck } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { SiAuth0 } from 'react-icons/si';

import { COLOR } from '../../constants';
import * as styles from './styles';

export const FEATURES = [
  {
    icon: <GiIndiaGate />,
    title: 'Made In India',
    backgroundImage: COLOR.INFO_GRADIENT,
  },
  {
    icon: <BsTruck />,
    title: 'Free Shipping above Rs. 499',
    backgroundImage: COLOR.SUCCESS_GRADIENT,
  },
  {
    icon: <BiRupee />,
    title: 'COD available',
    backgroundImage: COLOR.ERROR_GRADIENT,
  },
  {
    icon: <SiAuth0 />,
    title: '100% Original',
    backgroundImage: COLOR.WARNING_GRADIENT,
  },
];

function Features(props) {
  return (
    <div style={styles.featureCardsContainer}>
      {FEATURES.map((item) => (
        <div style={{ backgroundImage: item.backgroundImage, borderRadius: '10px', marginRight: '10px', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
          <div style={styles.featureCard}>
            <span>{item.icon}</span>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
