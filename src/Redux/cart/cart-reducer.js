import { addItemToCart, removeItemsToCart } from "./cart-utils";
import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  CHAU_MODAL,
  HOLA_MODAL,
} from "./cart-actions";

const INITIAL_STATE = {
  show: false,
  cartItems: [],
  modal: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case HOLA_MODAL:
      return {
        ...state,
        modal: true,
      };
    case CHAU_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
