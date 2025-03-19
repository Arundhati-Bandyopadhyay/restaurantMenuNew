import React, { useState, useEffect } from 'react';

export default function CartItem({ cartItem, setCartItems }) {
  const [item, setItem] = useState({
    name: cartItem.name,
    price: cartItem.price,
    description: cartItem.description,
    quantity: cartItem.quantity ? cartItem.quantity : 1
  });

  useEffect(() => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.map((cartItemInArray) => {
        if (cartItemInArray.name === item.name) {
          return { ...item };
        }
        return cartItemInArray;
      });
      return updatedItems;
    });
  }, [item, setCartItems]);

  const handleIncreaseQuantity = () => {
    setItem({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecreaseQuantity = () => {
    setItem({ ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 });
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setItem({ ...item, quantity: value });
    }
  };

  const handleRemoveItem = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((i) => i.name !== cartItem.name)
    );
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition justify-between">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{cartItem.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{cartItem.description}</p>
      </div>

      <div className="flex items-center">
        <button
          className="p-1 rounded-full hover:bg-gray-200"
          onClick={handleDecreaseQuantity}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="mx-2 w-12 text-center font-medium border rounded"
          min="1"
        />
        <button
          className="p-1 rounded-full hover:bg-gray-200"
          onClick={handleIncreaseQuantity}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="pl-4 flex flex-col items-end">
        <span className="font-medium text-gray-900">Rs. {(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</span>
        <button
          className="mt-1 text-sm text-red-500 hover:text-red-700"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
}