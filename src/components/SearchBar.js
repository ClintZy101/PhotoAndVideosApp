import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs';
import axios from "axios";
import { Link } from 'react-router-dom';


export const SearchBar = ({ query, setQuery, fetchData, addToRecent, savedRecentSearch, setImageArray, setHasError, setSearchWord }) => {

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
        if(query !== "") {
            e.preventDefault()
        fetchData()
        // addToRecent()
        scrollToGallery()
        } else return
        
    }

    const popularSearches = [
        { title: "Food", url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Nature", url: "https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Landscape", url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Forest", url: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Coffee", url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" },
        { title: "Beach", url: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Abstract", url: "https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { title: "Office", url: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ]



    return (
        <div className="relative sm:w-[500px] md:w-[700px] w-5/6 mx-auto ">
            <form className=" h-14 mx-auto mt-5  bg-white rounded-md flex z-40"
                onSubmit={submitData}
            >
                <input
                    required
                    onFocus={onFocus}
                    // onBlur={onBlur}
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
                <div className="p-2 w-full  border-t shadow-innertext-zinc-600">

                    <h2 className="font-semibold">Trending Topics</h2>

                    <div className="flex flex-wrap ">
                        {popularSearches.map((p) => (
                        <TrendingTopics 
                        setFocused={setFocused}
                        key={p.url}  title={p.title} imgURL={p.url} setQuery={setQuery} submitData={submitData} setImageArray={setImageArray} 
                        setHasError={setHasError}
                        setSearchWord={setSearchWord}
                        query={query}
                        />))}
                    </div>

                </div>
            </div>
            <div className={`${focused ? "hidden" : "text-white"}`}>Suggested: sushi, indian food,  meat,  restaurant , tomato,  food,  more</div>
        </div>
    )
}



export const TrendingTopics = ({ title, imgURL, setQuery, submitData, setImageArray, setFocused, setHasError, setSearchWord}, query) => {

    // const onClick = (title) => {
    //     setQuery(title);
    //     submitData();
    //     console.log(title)
    // }

    const fetchTrending = async (title) => {
        try {
            const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

            const URL = `https://api.pexels.com/v1/search?query=${title}&per_page=80&key=${API_KEY}`

            setSearchWord(title)

            await axios.get(URL).then(res => setImageArray(res.data.photos))
            setQuery("")
            setFocused(false)
        } catch (error) {
            setHasError(true)
            console.log(error);
        }

    }
    return (

        <div  onClick={()=>fetchTrending(title)}
            className="flex space-x-3 rounded-3xl shadow-lg items-center w-max py-2 px-3 m-3 hover:bg-zinc-200 cursor-pointer">
            <img
                className="h-10 w-10 rounded-full"
                src={imgURL} alt="" />
            <p className="font-bold">{title}</p>
        </div>

    )
}

