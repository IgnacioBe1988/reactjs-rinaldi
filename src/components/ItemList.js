import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto) => (
        <Item key={producto.id} product={producto} />
      ))}
    </ul>
  );
};

export default ItemList;
