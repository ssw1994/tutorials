import React, { useEffect, useMemo, useState } from "react";

export function Product(prop) {
  let { title, price } = prop;
  console.log(title);
  return (
    <div className="box" onClick={() => prop.deleteItem(prop)}>
      <h1>{title}</h1>
      <h3>{price}</h3>
    </div>
  );
}

export default function ListAndKey() {
  const products = [
    {
      title: "Pen",
      price: 20,
    },
    {
      title: "Book",
      price: 50,
    },
    {
      title: "Watch",
      price: 200,
    },
    {
      title: "Bag",
      price: 120,
    },
    {
      title: "Laptop",
      price: 20000,
    },
    {
      title: "Mouse",
      price: 250,
    },
    {
      title: "Keyboard",
      price: 350,
    },
    {
      title: "Monitor",
      price: 4000,
    },
  ];
  const [list, updateList] = useState(products);

  const add = () => {
    list.push({
      title: "t_" + (Math.random() * 10).toFixed(2),
      price: (Math.random() * 100).toFixed(2),
    });
    updateList([...list]);
  };

  const deleteItem = (item) => {
    updateList(list.filter((ele) => ele.title !== item.title));
  };

  const createListItem = (item) => {
    return (
      <li onClick={(e) => deleteItem(item)} key={item.title}>
        {item.title}
      </li>
    );
  };

  return (
    <>
      <ul className="list">
        {list.map((item, index) => createListItem(item))}
      </ul>
      <button onClick={add}>Add</button>
    </>
  );
}

// [li,li,li,li,li]
