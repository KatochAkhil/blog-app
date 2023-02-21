import { LOGIN, REGISTER, SINGLE_USER } from "./constant";

const initState = {
  login: {},
  user: {},
};

export const mainReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: { ...payload },
      };
    case REGISTER:
      return {
        ...state,
      };
    case SINGLE_USER:
      return {
        ...state,
        user: { ...payload },
      };
    default:
      return state;
  }
};
