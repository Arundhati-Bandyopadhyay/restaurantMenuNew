import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import { useOutletContext } from 'react-router-dom';

export default function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();

  const totalPrice = cartItems.reduce((sum, item) => {
    if (item && item.price && item.quantity) {
      const price = parseFloat(item.price.replace('₹', ''));
      if (!isNaN(price)) {
        return sum + (price * item.quantity);
      }
    }
    return sum;
  }, 0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    } else {
      setCartItems([]);
    }
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <div>
        {cartItems.map((cartItem, idx) => (
          <CartItem
            key={idx}
            cartItem={cartItem}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div className="mt-6 p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-lg">Total:</span>
          <span className="font-bold text-xl">Rs. {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}