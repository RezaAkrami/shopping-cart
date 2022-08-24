import ProductsContextProvider from "./context/ProductsContextProvider";
import Store from "./components/Store";

function App() {
  return (
    <ProductsContextProvider>
      <Store/>
    </ProductsContextProvider>
  );
}

export default App;
