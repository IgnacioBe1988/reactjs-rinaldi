import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const parametros = useParams();

  return <div>{parametros.id}</div>;
};

export default ItemDetailContainer;
