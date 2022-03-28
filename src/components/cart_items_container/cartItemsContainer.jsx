import React from 'react';
import * as styles from './styles';
import CART_ITEM from '../../assets/cart/product_1.jpeg';
export const cartHeading = [
  {
    id: 'item',
    label: 'Item',
  },
  {
    id: 'price',
    label: 'Price',
  },
  {
    id: 'qty',
    label: 'Quantity',
  },
  {
    id: 'discount',
    label: 'Discount',
  },
  {
    id: 'subtotal',
    label: 'Subtotal',
  },
];

export const CartItem = () => (
  <div class='horizontal-card'>
    <img class='horizontal-card-image' src={CART_ITEM} alt='cart item' />
    <div class='horizontal-card-detail'>
      <figcaption class='primary-text'>Printed Casual Shirt</figcaption>
      {/* <figcaption class='secondary-text'>SIZE M</figcaption>
      <button class='icon-btn secondary-cta-btn'>
        <img class='btn-icon' src='../../assets/card/icons/recycle-bin.png' alt='wishlist icon' />
        REMOVE
      </button> */}
    </div>
  </div>
);
export const cartItems = [
  {
    id: 'item',
    label: 'Item',
    value: <CartItem />,
  },
  {
    id: 'price',
    label: 'Price',
    value: 'Rs 1149',
  },
  {
    id: 'qty',
    label: 'Quantity',
    value: '- 1 +',
  },
  {
    id: 'discount',
    label: 'Discount',
    value: 'Rs. 746.0',
  },
  {
    id: 'subtotal',
    label: 'Subtotal',
    value: '-Rs. 1149.0- Rs. 403.0',
  },
];

function CartItemsContainer(props) {
  return (
    <div style={styles.cartItemsContainer}>
      <table style={styles.cartItemsSubContainer}>
        <thead>
          <tr>
            {cartHeading.map((heading) => (
              <th> {heading.label} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {cartItems.map((item) => (
              <td> {item.value}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button class='btn semi-transparent'>CONTINUE SHOPPING</button>
    </div>
  );
}

export default CartItemsContainer;
