import {
  incrementCounter,
  decrementCounter,
  Logout,
  Login
} from "../Actions/actionTypes";

const initialState = {
  counter: 0,
  counterString: "1",
  userName: ""
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return {
        ...state,
        counter: state.counter + 1,
        counterString: state.counterString + "1"
      };

    case decrementCounter:
      return { ...state,
        counter: state.counter - 1
      };

    case Logout:
      return { ...initialState
      };

      case Login:
        return {
          ...state,
          userName: action.payload
        };

    default:
      return state;
  }
};

export default counterReducer;
