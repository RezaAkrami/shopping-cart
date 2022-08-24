import React from 'react';
import { shorteTitel } from '../helper/functions';

const Card = ({data}) => {



    return (
        <div>
            <img src={data.image} alt={shorteTitel(data.title)} />

            <h1>{shorteTitel(data.title)}</h1>

            <p>{data.price}$</p>

            <div>

                <a href="#">Details</a>
                <div>
                    <button>Add</button>
                </div>
                
            </div>
        </div>
    );
};

export default Card;