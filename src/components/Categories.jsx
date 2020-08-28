import React from "react";

const Categories = React.memo(function ({
  items,
  activeItem,
  onSelectCategory,
}) {
  const itemsEl =
    items &&
    items.map((item, index) => (
      <li
        key={item}
        className={activeItem === index ? "active" : ""}
        onClick={() => onSelectCategory(index)}
      >
        {item}
      </li>
    ));

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {itemsEl}
      </ul>
    </div>
  );
});

export default Categories;
