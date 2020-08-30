import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, Loading } from "../components";

import { setCategory, setSortBy } from "../redux/actions";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { label: "популярности", type: "popular" },
  { label: "цене", type: "price" },
  { label: "алфавиту", type: "name" },
];

const Home = () => {
  const dispatch = useDispatch();
  const { pizzas, isLoading, category, sortBy, cartPizzas } = useSelector(
    ({ pizzas, filters, cart }) => ({
      pizzas: pizzas.items,
      isLoading: pizzas.isLoading,
      category: filters.category,
      sortBy: filters.sortBy,
      cartPizzas: cart.items,
    })
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  const pizzaAddHandler = React.useCallback(
    (pizza) => {
      dispatch(addPizzaToCart(pizza));
    },
    [dispatch]
  );

  const pizzasEl =
    pizzas &&
    pizzas.map((el) => {
      const inCart = cartPizzas.filter((pizza) => pizza.id === el.id).length;
      return (
        <PizzaBlock
          key={el.id}
          {...el}
          onAddPizza={pizzaAddHandler}
          inCart={inCart}
        />
      );
    });

  const categorySelectHandler = React.useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  const sortSelectHandler = React.useCallback(
    (item) => dispatch(setSortBy(item)),
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeItem={category}
          onSelectCategory={categorySelectHandler}
        />
        <SortPopup
          items={sortItems}
          activeItem={sortBy}
          onSelectSort={sortSelectHandler}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      {isLoading && <Loading />}
      <div className="content__items">{pizzasEl}</div>
    </div>
  );
};

export default Home;
