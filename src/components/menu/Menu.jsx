import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Items from "./Items";
import { Outlet } from "react-router-dom";

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Crispy Fries", description: "Golden and crispy.", price: "99" },
      {
        name: "Onion Rings",
        description: "Delicious fried rings.",
        price: "129",
      },
      {
        name: "Chicken Wings",
        description: "Spicy and flavorful.",
        price: "199",
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Burger Deluxe",
        description: "Juicy patty, fresh toppings.",
        price: "249",
      },
      {
        name: "Pasta Alfredo",
        description: "Creamy pasta with chicken.",
        price: "299",
      },
      {
        name: "Veggie Pizza",
        description: "Loaded with fresh veggies.",
        price: "279",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Chocolate Cake",
        description: "Rich and decadent.",
        price: "149",
      },
      {
        name: "Ice Cream Scoop",
        description: "Various flavors available.",
        price: "79",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Soft Drinks",
        description: "Coke, Pepsi, Sprite.",
        price: "49",
      },
      { name: "Iced Tea", description: "Refreshing and cool.", price: "69" },
      { name: "Coffee", description: "Hot or Iced", price: "89" },
    ],
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
const [cartItems, setCartItems] = useState(()=> {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuItems = selectedCategory
    ? menuItems.find((item) => item.category === selectedCategory)
    : menuItems;

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  console.log("filteredMenuItems",filteredMenuItems);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar menuItems={menuItems} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Navbar>
      <Outlet
        context={{
          selectedCategory,
          filteredMenuItems,
          menuItems,
          cartItems,
          setCartItems
        }}
      />
    </div>
  );
}

export default Menu;
