import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'

function Dashboard() {
    return (
        <section className="dashboard">
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[140px_1fr] xl:grid-cols-[240px_1fr]">
                <div className="bg-red-400">
                    <SideBar/>
                </div>
                <div className="bg-orange-400 grid grid-rows-[100px_1fr]">
                    <div className="bg-yellow-400">
                        <NavBar/>
                    </div>
                    <div className="bg-lime-400 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[1fr_400px] ">{/**lg:grid-cols-[1fr_300px] */}
                        <div className="bg-cyan-400">
                            <Main/>
                        </div>
                        <div className="bg-blue-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam aliquid vero ea rem iure ab officia qui perspiciatis error adipisci, laboriosam doloribus voluptatibus molestias at perferendis eveniet voluptatum pariatur placeat dolore. Provident eos quo ratione reiciendis saepe totam voluptatem voluptatibus cupiditate, officia nisi minus in nam adipisci enim aperiam corrupti vel deserunt ex pariatur! Maiores repudiandae molestias nobis voluptas blanditiis ad eaque provident laborum ab nemo, ex porro perferendis modi ipsam adipisci earum incidunt quia natus? Consequuntur repellendus dignissimos libero dolorum quos corrupti commodi et. Necessitatibus soluta voluptatibus fuga molestiae alias earum quod delectus aliquam saepe, dolore ipsa odit!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard