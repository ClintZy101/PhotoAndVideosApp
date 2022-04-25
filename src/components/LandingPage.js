import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { BsSearch } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import { HiMenuAlt2 } from 'react-icons/hi'

export const LandingPage = ({ query, setQuery, fetchData, navbar }) => {

    const bgImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    const bgImage2 = "https://images.pexels.com/photos/6622889/pexels-photo-6622889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    const bgImage3 = "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
    const bgArray=[bgImage, bgImage2, bgImage3]


    const styles = {
        main: {
            backgroundImage: `url(${bgImage3})`,
            // height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }

    // const changeBackground = () => {
    //     setTimeout(() => {

    //     }, 10000)
    // }

    const setSearch = (e) => {
        setTimeout(() => {
            setQuery(e.target.value)
        }, 2000)
    }

    const submitData = (e) => {
        e.preventDefault();
        fetchData()
    }

    return (
        <div className="h-[500px]" style={styles.main}>
            <div className="font-thin text-xl text-slate-200 h-16 py-2 px-5 flex justify-between items-center">
                <span>Media Library</span>
                <div className="flex space-x-4 items-center">
                    <BsBell fontSize="1.5rem" className="cursor-pointer hover:text-gray" />
                    <HiMenuAlt2 fontSize="2rem" className="cursor-pointer hover:text-gray" />
                </div>
            </div>

            <div className=" text-center mt-28">

                <div className="font-extrabold text-4xl text-white ">
                    Start Searching for free Photos and Videos!
                 </div >

                <form className="sm:w-[500px] md:w-[700px] w-5/6 h-14 mx-auto mt-5  bg-white rounded-md flex"
                // onSubmit={()=>submitData()}
                >
                    <input
                        type="text"
                        placeholder="Search for free Photos & Videos"
                        className=" placeholder:text-lg placeholder:font-semibold outline-none rounded-md w-full h-full px-3"
                        onChange={(e) => setSearch(e)}
                    />
                    <BsSearch
                        fontSize="2rem"
                        className="text-zinc-800 m-auto mr-3 cursor-pointer" />
                </form>

                <div className="text-white">Suggested: sushi, indian food,  meat,  restaurant , tomato,  food,  more</div>
            </div>


        </div>
    )
}
