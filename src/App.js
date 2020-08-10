import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import "./scss/app.scss";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home pizzas={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
