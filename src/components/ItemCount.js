export const ItemCount = ({ count, handleCount }) => {
  return (
    <div>
      <button onClick={() => handleCount("minus")}>-</button>
      <span>{count}</span>
      <button onClick={() => handleCount("plus")}>+</button>
    </div>
  );
};
