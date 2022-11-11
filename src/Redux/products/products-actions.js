export const SEARCH_ITEM = "SEARCH_ITEM";
export const FILTER_ITEM = "FILTER_ITEM";

export const searchItem = (value) => ({
  type: SEARCH_ITEM,
  payload: value,
});

export const filterItem = (value) => ({
  type: FILTER_ITEM,
  payload: value,
});
