import { GET_ALL_BLOGS, LOGIN, REGISTER, SINGLE_USER } from "./constant";

const initState = {
  login: {},
  user: {},
  blogs: [],
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
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: { ...payload },
      };
    default:
      return state;
  }
};
