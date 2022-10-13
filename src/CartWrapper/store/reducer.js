import { StoreActions } from "./actions";

export const ShopAppState = {
  products: [],
  userDetails: [],
  isLoggedIn: false,
  filters: {
    category: null,
    search: "",
  },
};
export default function reducer(state = ShopAppState, action) {
  switch (action.type) {
    case StoreActions.LOGIN_USER:
      return { ...state, isLoggedIn: true, userDetails: action.payload };
  }
  return state;
}
