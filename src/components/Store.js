import React , {useContext} from 'react';
import { productsContext } from '../context/ProductsContextProvider';
import Card from './Card';

const Store = () => {

    const products = useContext(productsContext);

    return (
        <div>
            {products.map(item =>
                <Card key={item.id} data={item} />
            )}
        </div>
    );
};

export default Store;