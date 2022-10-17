import React, { useState } from "react";
import { StoreActions } from "../store/actions";
import { StoreContext } from "../store/StoreContext";
export default function SearchBar({ state, dispatch }) {
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

  //const state = React.useContext(StoreContext);

  const [category, setCategory] = useState("");
  const [searchValue, setSeachValue] = useState("");

  const updateCategory = (icategory) => {
    // Electronice
    //
    dispatch({
      type: StoreActions.UPDATE_CATEGORY,
      payload: categories.find(({ category }) => category === icategory),
    });
  };

  React.useEffect(() => {
    console.log("updating category" + category);
    updateCategory(category);
  }, [category]);

  return (
    <div className="header-container">
      <div className="search-controller">
        <form>
          <div>
            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">None</option>
                {categories.map(({ category }) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                placeholder="search ...."
                value={searchValue}
                onChange={(e) => setSeachValue(e.target.value)}
              />
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
