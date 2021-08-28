import React from 'react';
import './CardList.css'
import ImgItem from "./ImgItem";
import ItemTitle from "./ItemTitle";
import ItemList from "./ItemList";
import Loader from "./Loader";

const CardList = ({beers, isLoading}) => {

    return (
        <div className='card-item'>
            {(isLoading) ? <Loader/> : beers.map(item => {
                return (
                    <div className='card' key={item.id}>
                        <ImgItem className='img-wrapper' url={item.image_url || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}/>
                        <hr/>
                        <ItemTitle className='beer-title' description={item.description} name={item.name}/>
                        <ItemList item={item}/>
                    </div>)
            })
            }
        </div>
    )
}

export default CardList;