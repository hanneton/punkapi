import React from 'react';
import './ItemList.css'

const ItemList = ({item}) => {
    const {abv, ibu, ebc, first_brewed, brewed_after, ingredients, food_pairing, id} = item
    const {hops, malt, yeast} = ingredients;
    return (
        <div>
            <ul className='item-list'>
                <li>ID: {id}</li>
                <li>abv: <span>{abv}</span></li>
                <li>ibu: <span>{ibu}</span></li>
                <li>ebc: <span>{ebc}</span></li>
                <li>yeast: <span>{yeast}</span></li>
                <li>brewed: <span>{first_brewed}</span></li>
                <li>malt: {malt.map(item => {
                    return <span>{item.name}, </span>
                })}</li>
                <li>hops: {hops.map(item => {
                    return <span>{item.name}, </span>
                })}</li>
                <li>foodpairing: {food_pairing.map(item => {
                    return <span><br/>{item}. </span>
                })}</li>
            </ul>
        </div>
    )
}

export default ItemList;
