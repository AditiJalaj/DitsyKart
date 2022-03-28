import React from 'react';
import CartItemsContainer from '../../components/cart_items_container/cartItemsContainer';
import CartSummary from '../../components/cart_summary/cartSummary';

function Cart(props) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <CartItemsContainer />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
