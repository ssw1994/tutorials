import React from "react";
export default function SideMenu({ state, dispatch }) {
  const { category } = state.filters;
  return (
    <div>
      <div>
        {category?.childs.map((subCategory) => (
          <div>
            <input type="checkbox" value={subCategory} key={subCategory} />
            <label>{subCategory}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
