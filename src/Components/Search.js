import React from 'react';
import './Search.css'

const Search = ({searchBeer}) => {
    return (
        <div className='search'>
            <h2>Search</h2>
            <input type="text" placeholder='Beer search...' onChange={el => searchBeer(el.target.value)}/>
        </div>
    )
}

export default Search