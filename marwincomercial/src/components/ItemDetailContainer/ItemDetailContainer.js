import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const product =      {
    id:3,
    image:"https://i.ibb.co/PxF2JM2/ipad.jpg",
    title:"iPad 10.2"

 }
export const ItemDetailContainer = () => {
    const [ data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
                
            }, 3000);
        });

        getData.then(res => setData(res));      
    }, [])
    
    return(
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer;
