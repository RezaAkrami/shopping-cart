import ProductsContextProvider from "./context/ProductsContextProvider";
import Store from "./components/Store";
import {Routes , Route , Navigate } from 'react-router-dom';
import Details from './components/Details'
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/store" element={<Store/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="*" element={ <Navigate to="/store" replace/> } />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
