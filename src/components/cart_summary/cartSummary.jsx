import React from 'react';
import * as styles from './styles';

export const priceBreakdown = [
  {
    title: 'Total MRP',
    value: 'Rs 1149',
  },
  {
    title: 'Discount on MRP',
    value: '-Rs 549',
  },
  {
    title: 'Delivery Charges',
    value: 'Rs 49',
  },
];
function CartSummary(props) {
  return (
    <div style={styles.cartSummaryContainer}>
      {/* add apply coupon here */}
      <h4>Price Detail ( 1 item )</h4>

      {priceBreakdown.map((item, index) => (
        <div style={styles.cartParticulars}>
          <span> {item.title} </span>
          <span> {item.value}</span>
        </div>
      ))}
      <div style={styles.cartParticulars}>
        <strong>Total Amount</strong>
        <span>Rs 2000</span>
      </div>

      <button class='btn elevated'>PLACE ORDER</button>
    </div>
  );
}

export default CartSummary;
