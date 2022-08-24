import React , {useState , useEffect} from 'react';
import {getData} from '../services/api';

//createContext
export const productsContext = React.createContext();

const ProductsContextProvider = ({children}) => {

    // Define state
    const [products, setProducts] = useState([]);

    // set data to state from api
    useEffect( ()=>{

       (async function fetchApi() {

            setProducts( await getData() );

        })();

    } , [] );


    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;