import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import "./scss/app.scss";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import { setPizzas } from "./redux/actions/pizzas";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => ({ items: pizzas.items }));

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch(setPizzas(data.pizzas)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home pizzas={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
