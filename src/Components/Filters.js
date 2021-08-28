import React, {useState} from 'react';
import './Flters.css'

function Filters({applyFilters}) {
    const [obj, setObj] = useState({});

    const makeRequest = (e) => {
            if (e.target.value == '' || e.target.value == null) {
                setObj({...obj, [e.target.name]: ''} )
            } else if (e.target.type === "date") {
                const date = new Date(e.target.value);
                setObj({ ...obj, [e.target.name]: `&${e.target.name}=${date.getMonth() + 1}-${date.getFullYear()}`});
            } else {
                setObj({...obj, [e.target.name]: `&${e.target.name}=${e.target.value}`});
            }
    };

    return (
        <div>
            <form >
                <label htmlFor=""> ABV greater than <input type="text" name='abv_gt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">ABV less than<input type="text" name='abv_lt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">IBU greater than<input type="text" name='ibu_gt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor=""> IBU less than<input type="text" name='ibu_lt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor=""> EBC greater than<input type="text" name='ebc_gt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">EBC less than<input type="text" name='ebc_lt' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">Brewed before<input type="date" name='brewed_before' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">Brewed after<input type="date" name='brewed_after' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">Hops name<input type="text" name='hops' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">Malt name<input type="text" name='malt=' onChange={(e) => makeRequest(e)}/></label>
                <label htmlFor="">Foodpairing<input type="text" name='food' onChange={(e) => makeRequest(e)}/></label>
                <button
                    onClick={
                    (e) => {
                        e.preventDefault();
                        applyFilters(obj);
                    }} type='submit' >Apply
                </button>

            </form>
        </div>
    );
}

export default Filters;