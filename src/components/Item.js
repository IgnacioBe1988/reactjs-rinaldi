const Item = ({ product }) => {
  return (
    <div>
      <li>{product.name}</li>
      <img src={product.img} className="imagenes" />
    </div>
  );
};

export default Item;
