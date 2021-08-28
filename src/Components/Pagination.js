import React from 'react'
import './Pagination.css'

const Pagination = ({beersPerPage, totalBeers, paginateNext, paginatePrev, currentPage}) => {

    return (
        <ul className='pagination'>
            <select name="beersPerPage" id="" onChange={(e) => beersPerPage(e.target.value) }>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
            </select>
            <li><button disabled={!(currentPage-1)} onClick={(e) => {paginatePrev()
            e.preventDefault()}} >&lt;&lt; prev</button></li>
            <li><button disabled>{currentPage}</button></li>
            <li><button onClick={paginateNext} >next &gt;&gt;</button></li>
        </ul>
    )
}

export default Pagination;