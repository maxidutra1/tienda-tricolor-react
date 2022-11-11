import { ProdRed } from "../../data/data";
import { SEARCH_ITEM, FILTER_ITEM } from "./products-actions";

const INITIAL_STATE = {
  productos: ProdRed,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return {
        ...state,
        productos: Object.entries(ProdRed).map(([productos]) => {
          return ProdRed[productos].filter((producto) =>
            producto.nombre.toLowerCase().includes(action.payload.toLowerCase())
          );
        }),
      };
    case FILTER_ITEM:
      return {
        ...state,
        productos: Object.entries(ProdRed).map(([productos]) => {
          return ProdRed[productos].filter(
            (producto) =>
              producto.section.toLowerCase() === action.payload.toLowerCase()
          );
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
