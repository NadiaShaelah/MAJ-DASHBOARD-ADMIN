import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <header className='w-full bg-white pb-6 shadow-lg'>
            <nav className='py-4 px-6'>
                <ul className='flex justify-between items-center'>
                    <li><h1 className='text-4xl font-semibold text-blue-950'>RsChain</h1></li>
                    <li>
                        <div className="flex items-center gap-4">
                            <span className='border border-blue-950 p-1 text-slate-500 bg-white'>
                                <FontAwesomeIcon icon={faSearch}/>
                                <input type="search" className='mx-2 border-none focus:outline-none ' placeholder='Recherchez ici...'/>
                            </span>
                            <span className='cursor-pointer border border-blue-950 text-blue-950 px-3 py-1 transition duration-500 ease-in-out hover:bg-blue-950 hover:text-white'>
                                <FontAwesomeIcon icon={faBell}/>
                            </span>
                            <span className='cursor-pointer border bg-blue-950 px-3 py-1 text-white shadow-[0_0_12px_rgba(0,0,0,0.2)] rounded-sm transition duration-500 ease-in-out hover:text-blue-950 hover:bg-white'>
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        // <section className='nav-bar w-full'>
        //     <nav className='p-4'>
        //         <ul className='grid grid-cols-2 justify-between'>
        //             <li>RsChain</li>
        //             <li className='flex justify-between'>
        //                 <SearchBar/>
        //                 <div className="flex gap-4">
        //                     <span className='text-3xl'><FontAwesomeIcon icon={faBell}/></span>
        //                     <span className='text-3xl'><FontAwesomeIcon icon={faUserCircle}/></span>
        //                 </div>
        //             </li>
        //         </ul>
        //     </nav>
        // </section>
    )
}

export default NavBar