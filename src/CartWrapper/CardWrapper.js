import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./CardWrapper.css";
import Footer from "./Footer/Footer";
import ProductList from "./ProductList/ProductList";
import SearchBar from "./SearchBar/SearchBar";
import SideMenu from "./SideMenu/SideMenu";
import reducer, { ShopAppState } from "./store/reducer";

export default function CardWrapper() {
  const [state, dispatch] = React.useReducer(reducer, ShopAppState);

  if (!state.isLoggedIn) {
    return <LoginForm dispatch={dispatch} />;
  }

  return (
    <div className="card-wrapper-grid-container">
      <div className="header grid-item" style={{ backgroundColor: "green" }}>
        <SearchBar state={state} dispatch={dispatch} />
      </div>
      <div className="cart-body">
        <div
          className="sidebar grid-item"
          style={{ backgroundColor: "lightgray" }}
        >
          <SideMenu state={state} dispatch={dispatch} />
        </div>
        <div className="content grid-item">
          <ProductList state={state} dispatch={dispatch} />
        </div>
      </div>
      <div className="footer grid-item">
        <Footer state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}
