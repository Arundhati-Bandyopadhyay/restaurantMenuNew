import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

export default function Item({ menu, cartItems, setCartItems }) {
  c
  // const handleAddToCart = (item) => {
  //   setCartItems((prevItems) => [...prevItems, item]);
  //   // setShowCart(true);
  // };
  const isItemInCart = (itemName) => {
    return cartItems.some(item => item.name === itemName);
  };

  const handleAddToCart = (itemToAdd) => {
    const existingItem = cartItems.find((item) => item.name === itemToAdd.name);

    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.name === itemToAdd.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
    }
  };
  const handleCart = () => {
    //setShowCart(!showCart);
  };
  console.log(cartItems);
  
  return (
    <div>
      <div key={menu.category} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {menu.category}
        </h2>
        {menu.items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg p-4 mb-2 shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-4">{item.price}</span>
              {isItemInCart(item.name) ? (
                <button
                  className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                  disabled
                >
                  Added to Cart
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link
        to={{
          pathname: '/cart'
        }}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md z-50"
      >
        My Cart ({cartItems.length})
      </Link>
    </div>
  )
}
