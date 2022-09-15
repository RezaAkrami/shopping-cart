import React , {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../context/ProductsContextProvider';
import {Link} from 'react-router-dom';

const Details = () => {

    // product id
    const id = useParams().id;

    //context
    const data = useContext(productsContext);

    //final product
    const product = data[ id - 1 ];

    //destructur product items
    const {image,price,title,description,category} = product;

    return (
        <div>
            <img src={image} alt="product" />

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category : </span>{category}</p>
                <div>
                    <span><span>Price : </span>{price}$</span>
                    <br />
                    <Link to="/store">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;