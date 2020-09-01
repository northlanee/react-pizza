import React from "react";
import { CartBottom, CartTop, CartItem } from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCartItem } from "../redux/actions/cart";
import CartEmpty from "../components/Cart/CartEmpty";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalCount: cart.totalCount,
    totalPrice: cart.totalPrice,
  }));

  const clearCartHandler = React.useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const removeItemHandler = React.useCallback(
    (id, price) => {
      dispatch(removeCartItem(id, price));
    },
    [dispatch]
  );

  const itemsJSX =
    items &&
    items.map((item, index) => (
      <CartItem
        key={`${item.id}_${index}`}
        {...item}
        idx={index}
        onRemoveItem={removeItemHandler}
      />
    ));

  const cartJSX = (
    <>
      <CartTop onClearCart={clearCartHandler} />
      <div className="content__items">{itemsJSX}</div>
      <CartBottom totalCount={totalCount} totalPrice={totalPrice} />
    </>
  );

  return (
    <div className="container container--cart">
      <div className="cart">{totalCount ? cartJSX : <CartEmpty />}</div>
    </div>
  );
};

export default Cart;
