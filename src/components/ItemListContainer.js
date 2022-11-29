import React, { useState } from "react";
import itemsMock from "../mocks/items.mock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  //aca seteo el estado para poder usar los datos que arroja la api
  const [items, setItems] = useState([]);

  //este seria el llamado a la api
  const porductList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(itemsMock);
    }, 3000)
  );

  //aca los muestro por consola
  porductList.then((data) => setItems(data));
  console.log(items);

  return (
    <div>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;
