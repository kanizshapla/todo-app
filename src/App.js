import React from "react";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
export default App;
