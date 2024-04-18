import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar() {
    return (
        <section className='search-bar w-full'>
            <div className="w-4/6 flex ">
                <input type="text" name="" id="" className='border border-gray-200 bg-white p-2 w-full focus:outline-none border-none'/>
                <button className='text-white p-2 bg-blue-900'><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </section>
    )
}

export default SearchBar