import React from 'react';
import prd1 from '../../assets/product_1.jpeg';
import prd2 from '../../assets/product_2.jpeg';
import prd3 from '../../assets/product_3.jpeg';
import prd4 from '../../assets/product_4.jpeg';
import * as styles from './styles';

//get call for all the products- later
export const products = [
  { id: 1, src: prd1 },
  { id: 2, src: prd2 },
  { id: 3, src: prd3 },
  { id: 4, src: prd4 },
];

function ListingContainer(props) {
  return (
    <div>
      {products.map((item) => (
        <img style={styles.productImg} src={item.src} />
      ))}
    </div>
  );
}

export default ListingContainer;
