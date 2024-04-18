import React from 'react'
import { faChartLine, faGear, faMessage, faSignOut, faTableCellsLarge, faTasksAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import appchaplogo from '../../images/app-chap-logo.png'


function SideBar() {
    return (
        <section className="sidebar bg-blue-950 h-full py-10 flex flex-col items-center">
            <div className="py-4 px-6">
                <ul className='flex flex-col gap-16 text-white relative'>
                    <li className='cursor-pointer transition duration-500 ease-in-out hover:text-blue-200 text-center -mt-[4rem] -ml-[2rem]'>
                        <img src={appchaplogo} alt="app-chap-logo" className="w-[10rem]"/>
                    </li>
                    <li className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200 border-b-[1px] border-b-blue-900'><FontAwesomeIcon className='mr-2' icon={faTableCellsLarge}/>Dashboard</li>
                    <li className='border-b-[1px] border-b-blue-900'>
                        <div className="flex flex-col gap-4">
                            <div className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>
                                <FontAwesomeIcon className='mr-2' icon={faTasksAlt}/>
                                <span>Tâches</span>
                            </div>
                            <div className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>
                                <FontAwesomeIcon className='mr-2' icon={faMessage}/>
                                <span>Messages</span>
                            </div>
                            <div className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>
                                <FontAwesomeIcon className='mr-2' icon={faChartLine}/>
                                <span>Analitics</span>
                            </div>
                        </div>
                    </li>
                    <li className='border-b-[1px] border-b-blue-900'>
                        <div className="flex flex-col gap-4">
                            <div className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>
                                <FontAwesomeIcon className='mr-2' icon={faUserTie}/>
                                <span>Admin</span>
                            </div>
                            <div className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>
                                <FontAwesomeIcon className='mr-2' icon={faGear}/>
                                <span>Parametres</span>
                            </div>
                        </div>
                    </li>
                    <li className='lg:flex-col lg:items-center xl:flex-row flex cursor-pointer transition duration-500 ease-in-out hover:text-blue-200'>{/** absolute top-[46rem] */}
                        <FontAwesomeIcon className='mr-2' icon={faSignOut}/>
                        <span>Deconnexion</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SideBar