import React , {useState , useEffect} from 'react';
import {getData} from '../services/api';

//createContext
const productsContext = React.createContext();

const ProductsContextProvider = (props) => {

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
            {props.children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;