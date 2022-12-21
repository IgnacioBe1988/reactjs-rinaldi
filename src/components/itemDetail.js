import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <img src={item.img} />
    </div>
  );
};

export default ItemDetail;
