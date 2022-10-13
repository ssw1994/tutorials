import React from "react";
import { StoreContext } from "../store/StoreContext";
export default function SearchBar() {
  const categories = [
    {
      category: "Mens",
      childs: ["Shirts", "Watch", "Shoes", "Pants", "Perfumes"],
    },
    {
      category: "Womens",
      childs: ["Clothing", "Shoes", "Perfumes", "Watches"],
    },
    {
      category: "Electronics",
      childs: [
        "Laptop",
        "Mobiles",
        "TV",
        "Freeze",
        "Air Conditioners",
        "Smart Watches",
      ],
    },
    {
      category: "Furniture",
      childs: ["Tables", "Chairs", "Beds", "Wardrobes", "Sinks"],
    },
    {
      categories: "Decoration",
      childs: ["Stickers", "Flags", "Frames", "Pots"],
    },
  ];

  const state = React.useContext(StoreContext);

  return (
    <div className="header-container">
      <div className="search-controller">
        <form>
          <div>
            <div>
              <select>
                <option value="">None</option>
                {categories.map(({ category }) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input placeholder="search ...." />
            </div>
          </div>
        </form>
      </div>
      <div className="user-details">
        <h2>{state.userDetails.username}</h2>
        {state.isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    </div>
  );
}
