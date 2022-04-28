import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ query, setQuery, fetchData, addToRecent, savedRecentSearch }) => {
    console.log(savedRecentSearch)
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
        // addToRecent()
        scrollToGallery()
    }

    return (
        <div className="relative sm:w-[500px] md:w-[700px] w-5/6 mx-auto shadow-lg">
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
            <div className={`${focused ? 'flex bg-white -mt-2 z-50 rounded-md shadow-lg' : 'hidden'}`}>
                <div className="p-2 w-full  border-t shadow-inner text-zinc-600">

                    <h2 className="font-semibold">Trending Topics</h2>
                    <div className="flex flex-wrap ">
                        <TrendingTopics title="Food" imgURL="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <TrendingTopics title="Nature" imgURL="https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <TrendingTopics title="Landscape" imgURL="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <TrendingTopics title="Forest" imgURL="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <TrendingTopics title="Coffee" imgURL="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" />
                        <TrendingTopics title="Beach" imgURL="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <TrendingTopics title="Abstract" imgURL="https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TrendingTopics = ({ title, imgURL }) => (
    <div className="flex space-x-3 rounded-3xl shadow-lg items-center w-max py-2 px-3 m-3 hover:bg-zinc-200 cursor-pointer">
        <img
            className="h-10 w-10 rounded-full"
            src={imgURL} alt="" />
        <p className="font-bold">{title}</p>
    </div>
)