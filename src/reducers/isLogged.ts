import { isLoggedAction } from "../actions/isLogged";

const isLoggedReducer = (state = false, action: isLoggedAction) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
