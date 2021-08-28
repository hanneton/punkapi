import React from 'react';
import './SidePanel.css'
import Search from "./Search";
import Filters from "./Filters";

const SidePanel = ({searchBeer, applyFilters}) => {
    return (
        <div className='side-panel'>
            <Search searchBeer={searchBeer} />
            <hr/>
            <Filters applyFilters={applyFilters}/>
        </div>

    )
}

export default SidePanel;