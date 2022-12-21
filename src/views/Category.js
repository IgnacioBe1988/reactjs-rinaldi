import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { itemsMock } from "../mocks/items.mock";

const Category = () => {
  const { categoria } = useParams();
  const categories = itemsMock.filter(
    (product) => product.category === categoria
  );

  return (
    <Layout>
      {categories.map((product) => (
        <Item product={product} />
      ))}
    </Layout>
  );
};

export default Category;
