import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'
import Analytics from '../../components/Analytics/Analytics'

function Dashboard() {
    return (
        <section className="dashboard bg-blue-100">
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[140px_1fr] xl:grid-cols-[240px_1fr]">
                <div className="">
                    <SideBar/>
                </div>
                <div className="grid grid-rows-[100px_1fr]">
                    <div className="">
                        <NavBar/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[1fr_400px] ">{/**lg:grid-cols-[1fr_300px] */}
                        <div className="">
                            <Main/>
                        </div>
                        <div className="">
                            <Analytics/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard