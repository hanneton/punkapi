import React, {useEffect, useState} from 'react';
import CardList from "./Components/CardList";
import './App.css'
import SidePanel from "./Components/SidePanel";
import Pagination from "./Components/Pagination";

function App() {


    const [beers, setBeerData] = useState([]);
    const [beerName, setBeerName] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [beersPerPage, setBeersPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState('')

    const getApi = (beersPerPage, currentPage = 1, beerName, filters= '') => {
        fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${beersPerPage}${beerName}${filters}`)
            .then(data => data.json())
            .then(data => data.statusCode != 400 ? setBeerData(() => data) : setBeerData([]))
            .catch(err => console.log(err))
        setIsLoading(false)
    }
    useEffect(() => {
        getApi(beersPerPage, currentPage, beerName, filters)
    },[beersPerPage, currentPage, beerName, filters])

    const paginateNext = () => {
        setCurrentPage(currentPage + 1)
    };
    const paginatePrev = () => setCurrentPage(currentPage - 1);
    const changeBeersPerPage = (el = 10) => {
        setBeersPerPage(el);
        setCurrentPage(1);
    }
    const searchBeer = (el) => {
        if (el) {
            setBeerName(`&beer_name=${el}`);
            setCurrentPage(1);
            setIsLoading(true)
        }
        else {
            setBeerName('')
        }
    }
    const applyFilters = (obj) => {
        setFilters(Object.values(obj).join(''))
        setCurrentPage(1)
    }

    return (
        <div className="App">
            <SidePanel searchBeer={searchBeer} applyFilters={applyFilters}/>
            <CardList isLoading={isLoading} className='card' beers={beers}/>
            <Pagination
                beersPerPage={changeBeersPerPage}
                paginateNext={paginateNext}
                paginatePrev={paginatePrev}
                currentPage={currentPage}/>
        </div>
    );
}

export default App;
