import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import Title from "./components/Title";
import Layout from "./components/Layout";
import { CartContext } from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        <Layout>
          <Title />
          <ItemListContainer />
        </Layout>
      </CartContext.Provider>
    </div>
  );
}

export default App;
