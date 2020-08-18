import React from "react";

import { Categories, SortPopup, PizzaBlock } from "../components";

function Home({ pizzas }) {
  const pizzasEl =
    pizzas && pizzas.map((el) => <PizzaBlock key={el.id} {...el} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { label: "популярности", type: "popular" },
            { label: "цене", type: "price" },
            { label: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzasEl}</div>
    </div>
  );
}

export default Home;
