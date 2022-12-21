import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import Title from "./components/Title";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Title />
        <ItemDetailContainer />
        <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
