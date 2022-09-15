import React from 'react';
import { shorteTitel } from '../helper/functions';
import {Link} from 'react-router-dom';

const Card = ({data}) => {



    return (
        <div>
            <img src={data.image} alt={shorteTitel(data.title)} />

            <h1>{shorteTitel(data.title)}</h1>

            <p>{data.price}$</p>

            <div>

                <Link to={`/details/${data.id}`}>Details</Link>
                <div>
                    <button>Add</button>
                </div>

            </div>
        </div>
    );
};

export default Card;