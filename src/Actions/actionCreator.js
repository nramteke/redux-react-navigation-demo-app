import {
  incrementCounter,
  decrementCounter,
  Login,
  Logout
} from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

const login = (userName) => {
  return {
    type: Login,
    payload: userName
  };
}

const logout = () => ({
  type: Logout
});

export { incrementAction, decrementAction, login, logout };
