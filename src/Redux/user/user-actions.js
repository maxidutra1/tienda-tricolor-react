export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SAVE_NEW_USER = "SAVE_NEW_USER";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const saveNewUser = (user) => ({
  type: SAVE_NEW_USER,
  payload: user,
});
