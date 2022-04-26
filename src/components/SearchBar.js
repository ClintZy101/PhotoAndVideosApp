import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({query, setQuery, fetchData }) => {

    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const scrollToGallery = () => {
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth'
          });
    }

    const submitData = (e) => {
        e.preventDefault()
        fetchData()
        scrollToGallery()
    }

    return (
        <div className="relative sm:w-[500px] md:w-[700px] w-5/6 mx-auto">
            <form className=" h-14 mx-auto mt-5  bg-white rounded-md flex z-40"
                onSubmit={submitData}
            >
                <input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type="text"
                    placeholder="Search for free Photos & Videos"
                    className=" placeholder:text-lg placeholder:font-semibold outline-none rounded-md w-full h-full px-3"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <BsSearch
                    fontSize="2rem"
                    className="text-zinc-800 m-auto mr-3 cursor-pointer"
                    onClick={submitData}
                />
            </form>
            <div className={`${focused ? 'flex bg-white -mt-2 z-50 rounded-md' : 'hidden'}`}>
                <div className="p-2 w-full  border-t shadow-inner text-zinc-600">
                    {/* <span className="border-t flex space-x-2 items-center">
                        <p> Recent Searches</p>
                        <IoIosCloseCircle />
                    </span>
                    <div>
                        <span>query: </span>
                    </div> */}
                {/* Collections */}
                <div>
                    <h2>Collections</h2>
                </div>
                    {/* Trending Topics */}
                    <div className="">
                        <h2>Trending Topics</h2>
                        <span>Food</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
