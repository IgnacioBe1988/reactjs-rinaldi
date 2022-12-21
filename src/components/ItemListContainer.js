import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsMock from "../mocks/items.mock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoria } = useParams();

  useEffect(() => {}, []);

  //aca seteo el estado para poder usar los datos que arroja la api
  const [items, setItems] = useState([]);

  //este seria el llamado a la api
  const porductList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(itemsMock);
    }, 2000)
  );

  //aca los muestro por consola
  porductList.then((data) => setItems(data));

  return (
    <div>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;
