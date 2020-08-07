import React, { useState } from "react";

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => setActiveItem(index);

  const itemsEl =
    items &&
    items.map((item, index) => (
      <li
        key={item}
        className={activeItem === index ? "active" : ""}
        onClick={() => onSelectItem(index)}
      >
        {item}
      </li>
    ));

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {itemsEl}
      </ul>
    </div>
  );
}

export default Categories;
