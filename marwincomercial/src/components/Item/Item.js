import '../../Sass/Item.css';
import React from 'react';

const Item = ({ infoP })=> {
    return (
        <a href='' className='smartPhone'>
            <img src={infoP.image} alt='' />
            <p>{infoP.title}</p>
        </a>
    )

}

export default Item;