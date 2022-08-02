
import React from 'react';
import Greeting from './../Header/Greeting/Greeting';
import './../../Sass/ItemListContainer.scss';
import { ItemCount } from '../ItemCount/ItemCount';


const ItemListContainer = ({ }) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }
    return (
        <div className="ItemListContainer">
            <Greeting greeting="¡Bienvenidos!" />
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;
