import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions";

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { label: "популярности", type: "popular" },
  { label: "цене", type: "price" },
  { label: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const { pizzas, activeCategory, activeSortItem } = useSelector(
    ({ pizzas, filters }) => ({
      pizzas: pizzas.items,
      activeCategory: filters.category,
      activeSortItem: filters.sortBy,
    })
  );

  const pizzasEl =
    pizzas && pizzas.map((el) => <PizzaBlock key={el.id} {...el} />);

  const categorySelectHandler = React.useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  const sortSelectHandler = React.useCallback(
    (index) => dispatch(setSortBy(index)),
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeItem={activeCategory}
          onSelectCategory={categorySelectHandler}
        />
        <SortPopup
          items={sortItems}
          activeItem={activeSortItem}
          onSelectSort={sortSelectHandler}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzasEl}</div>
    </div>
  );
}

export default Home;
