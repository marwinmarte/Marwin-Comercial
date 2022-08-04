
import React, { useEffect, useState } from 'react';
import Greeting from './../Header/Greeting/Greeting';
import ItemList from '../ItemList/ItemList';
import './../../Sass/ItemListContainer.scss';
import { ItemCount } from '../ItemCount/ItemCount';


const products = [
    {
        id:1,
        image:"https://i.ibb.co/CtQBmK5/iphone-se.jpg",
        title:"iPhone SE",
   
     },
     {
        id:2,
        image:"https://i.ibb.co/Hd466q4/macbook.jpg",
        title:"Macbook Air A1466",
   
     },
     {
        id:3,
        image:"https://i.ibb.co/PxF2JM2/ipad.jpg",
        title:"iPad 10.2"
   
     },
]

export const ItemListContainer = ({ }) => {
    const [data, setData] = useState([]);

    useEffect( () =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(products);
            }, 2000);

        });
        getData.then(res => setData(res))

    }, []);

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }
    return (
        <div className="ItemListContainer">
            <Greeting greeting="¡Bienvenidos!" />
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
            <ItemList  data={data} />
        </div>
    )
}

export default ItemListContainer;
