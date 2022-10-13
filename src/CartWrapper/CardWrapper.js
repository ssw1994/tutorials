import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./CardWrapper.css";
import Footer from "./Footer/Footer";
import ProductList from "./ProductList/ProductList";
import SearchBar from "./SearchBar/SearchBar";
import SideMenu from "./SideMenu/SideMenu";
import reducer, { ShopAppState } from "./store/reducer";
import { StoreContext } from "./store/StoreContext";

export default function CardWrapper() {
  const [state, dispatch] = React.useReducer(reducer, ShopAppState);

  if (!state.isLoggedIn) {
    return <LoginForm dispatch={dispatch} />;
  }

  return (
    <StoreContext.Provider value={state}>
      <div className="card-wrapper-grid-container">
        <div className="header grid-item">
          <SearchBar />
        </div>
        <div className="cart-body">
          <div className="sidebar grid-item">
            <SideMenu />
          </div>
          <div className="content grid-item">
            <ProductList />
          </div>
        </div>
        <div className="footer grid-item">
          <Footer />
        </div>
      </div>
    </StoreContext.Provider>
  );
}
