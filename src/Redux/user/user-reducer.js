import { SET_CURRENT_USER, SAVE_NEW_USER } from "./user-actions";

const INITIAL_STATE = {
  currentUser: null,
  userList: [
    {
      email: {
        value: "test@test.com",
        isValid: true,
      },
      password: {
        value: "pass1234",
        isValid: true,
      },
      displayName: {
        value: "testuser",
        isValid: true,
      },
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case SAVE_NEW_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
