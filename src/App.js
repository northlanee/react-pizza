import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import { setPizzas } from "./redux/actions/pizzas";
import { useDispatch } from "react-redux";

import "./scss/app.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch(setPizzas(data.pizzas)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
