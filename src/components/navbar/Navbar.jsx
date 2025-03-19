import React from "react";
import logo from "/assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Navbar({
  menuItems,
  selectedCategory,
  setSelectedCategory,
}) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-black shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <select
              className="bg-black text-white p-2 rounded"
              value={selectedCategory || "all"}
              onChange={(e) =>
                e.target.value === "all"
                  ? setSelectedCategory(null)
                  : setSelectedCategory(e.target.value)
              }
            >
              <option value="all">All Categories</option>
              {menuItems.map((categoryItem) => (
                <option
                  key={categoryItem.category}
                  value={categoryItem.category}
                >
                  {categoryItem.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <div>
          <button className="text-white hover:text-gray-300 ml-4">Login</button>
        </div>
      </nav>
    </>
  );
}
