import React, { useEffect, useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs';

export const Header = ({ navbar, query, setQuery }) => {

    const setSearch = (e) => {
        setTimeout(() => {
            setQuery(e.target.value)
        }, 2000)
    }
        return (
            <div className='sticky z-50 top-0 h-16   items-center px-5 py-2 flex justify-between font-sans  text-xl bg-zinc-800 text-white'>
                <div className=" font-thin hidden sm:flex">
                    Media Library
            </div>
            
            {/* Search Input Form */}
                <form className='sm:w-[500px] w-5/6 h-10 mx-auto   bg-white rounded-md flex'
                // onSubmit={()=>submitData()}
                >
                    <input
                        type="text"
                        placeholder="Search for free Photos & Videos"
                        className="placeholder:text-lg placeholder:font-semibold outline-none rounded-md w-full h-full px-3 text-black"
                        onChange={(e) => setSearch(e)}
                    />
                    <BsSearch
                        fontSize="1.5rem"
                        className="text-zinc-800 m-auto mr-3 cursor-pointer" />
                </form>
                <HiMenuAlt2 fontSize="2rem" className="cursor-pointer hover:text-gray" />
            </div>
        )
    
}