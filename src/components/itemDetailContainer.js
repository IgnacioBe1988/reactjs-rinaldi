import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import itemsMock from "../mocks/items.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemsMock), 2000)).then(
      (data) => setItem(data)
    );
  }, []);
};

export default ItemDetailContainer;
