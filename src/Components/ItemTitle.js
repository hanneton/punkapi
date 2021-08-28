import React from 'react'

const ItemTitle = ({name, description}) => {
    return (
        <div>
            <h3>{name}</h3>
            <hr/>
            <div className='descr'>{description}</div>
        </div>
    )
}

export default ItemTitle