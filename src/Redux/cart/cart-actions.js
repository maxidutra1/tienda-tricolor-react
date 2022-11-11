export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const CHAU_MODAL = "CHAU_MODAL";
export const HOLA_MODAL = "HOLA_MODAL";

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = (item) => ({
  type: CLEAR_CART,
});

export const holaModal = () => ({
  type: HOLA_MODAL,
});

export const chauModal = () => ({
  type: CHAU_MODAL,
});
