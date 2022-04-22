import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { BsSearch } from 'react-icons/bs';

export const LandingPage = ({ query, setQuery, fetchData, navbar }) => {
  
    const bgImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    const bgImage2 = "https://images.pexels.com/photos/6622889/pexels-photo-6622889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    const styles = {
        main: {
            backgroundImage: `url(${bgImage2})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }

    const setSearch =(e)=> {
        setTimeout(()=> {
            setQuery(e.target.value)
        }, 2000)
    }

    const submitData =(e) => {
        e.preventDefault();
        fetchData()
    }
  
    return (
        <div className="h-screen" style={styles.main}>
             <div className=" font-thin text-slate-200 h-16 py-2 px-5">
                <span>Media Library</span>
            </div>
           
            <div className=" text-center mt-32">

                <div className="font-extrabold text-4xl text-white ">
                    Start Searching for free Photos and Videos!
                 </div >

                <form className="sm:w-[500px] w-5/6 h-14 mx-auto mt-5  bg-white rounded-md flex"
                // onSubmit={()=>submitData()}
                >
                    <input 
                    type="text" 
                    placeholder="Search for free Photos & Videos"
                    className=" placeholder:text-lg placeholder:font-semibold outline-none rounded-md w-full h-full px-3"
                    onChange={(e)=> setSearch(e)}
                    />
                    <BsSearch
                        fontSize="2rem"
                        className="text-zinc-800 m-auto mr-3 cursor-pointer" />
                </form>

                <div className="text-white">sushi, indian food,  meat,  restaurant , tomato,  food  more</div>
            </div>


        </div>
    )
}
