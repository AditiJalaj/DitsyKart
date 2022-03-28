import React from 'react';
import { SIZES, BRANDS, COLORS, DISCOUNT, CATEGORIES } from '../../constants/';
import * as styles from './styles';

export const Price = () => (
  <div style={styles.sidebarItemContainer}>
    <h4>PRICE</h4>
    price slider here here
  </div>
);

export const RatingContainer = () => (
  <div style={styles.sidebarItemContainer}>
    <h4>RATING</h4>
    star buttons here
  </div>
);

export const DiscountContainer = () => (
  <div style={styles.sidebarItemContainer}>
    <h4>DISCOUNT</h4>
    {DISCOUNT.map((item, index) => (
      <label className='al-center flex'>
        <input type='checkbox' />
        {item}
      </label>
    ))}
  </div>
);

export const ColorContainer = () => (
  <div style={styles.sidebarItemContainer}>
    <h4>COLOR</h4>
    {COLORS.map((item, index) => (
      <label className='al-center flex'>
        <input type='checkbox' />
        <span style={{ backgroundColor: item.colorCode, color: item.colorCode, borderRadius: '6px', marginRight: '6px' }}> cc </span> {item.color}
      </label>
    ))}
  </div>
);

export const BrandContainer = () => {
  return (
    <div style={styles.sidebarItemContainer}>
      <h4>BRAND</h4>
      {BRANDS.map((item, index) => (
        <label className='al-center flex'>
          <input type='checkbox' />
          {item}
        </label>
      ))}
    </div>
  );
};

export const SizeContainer = () => {
  return (
    <div style={styles.sidebarItemContainer}>
      <h4>SIZE</h4>
      {SIZES.map((item, index) => (
        <button>{item}</button>
      ))}
    </div>
  );
};

export const CategoryContainer = () => (
  <div style={styles.sidebarItemContainer}>
    <h4>CATEGORY</h4>
    {CATEGORIES.map((item, index) => (
      <label className='al-center flex'>
        <input type='checkbox' />
        {item}
      </label>
    ))}
  </div>
);

function SidebarContainer(props) {
  return (
    <div style={styles.sidebarContainer}>
      <CategoryContainer />
      <SizeContainer />
      <BrandContainer />
      <Price />
      <ColorContainer />
      <RatingContainer />
      <DiscountContainer />
    </div>
  );
}

export default SidebarContainer;
