import React from "react";

const Item = ({ product }) => {
  return (
    <div>
      <li>{product.name}</li>
      <img src={product.img} className="imagenes" />
    </div>
  );

  console.log(Item);
};

export default Item;
