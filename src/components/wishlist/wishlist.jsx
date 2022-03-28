import React from 'react';
import { products } from '../listingContainer/listingContainer';
import * as styles from './styles';

function WishlistProducts(props) {
  return (
    <div style={styles.wishlistContainer}>
      {products.map((item) => (
        <img style={styles.productImg} src={item.src} />
      ))}
    </div>
  );
}

export default WishlistProducts;
