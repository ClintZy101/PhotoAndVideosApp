import React, { useState } from 'react'

import { BsBell } from 'react-icons/bs';
import { HiMenuAlt2 } from 'react-icons/hi'

import { SearchBar } from './SearchBar';

export const LandingPage = ({ query, setQuery, fetchData, addToRecent, savedRecentSearch, setImageArray, setHasError, setSearchWord }) => {

    const [clicked, setClicked] = useState(false)
    const bgImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const bgImage2 = "https://images.pexels.com/photos/6622889/pexels-photo-6622889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    const bgImage3 = "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
    const bgArray = [bgImage, bgImage2, bgImage3]

    const styles = {
        main: {
            backgroundImage: `url(${bgImage3})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }

 
    // const changeBackground = () => {
    //     setTimeout(() => {

    //     }, 10000)
    // }

    return (
        <div 
        className="h-[500px]" 
        style={styles.main}
        >

            {/* Header */}
            <div className="font-thin text-xl text-slate-200 h-16 py-2 px-5 flex justify-between items-center">
                <span>Media Library</span>
                <div className="flex space-x-4 items-center">
                    <BsBell fontSize="1.5rem" className="cursor-pointer hover:text-gray" />
                    <HiMenuAlt2 fontSize="2rem" className="cursor-pointer hover:text-gray" />
                </div>
            </div>

            <div className=" text-center mt-28"
            >
                <div className="font-extrabold text-4xl text-white ">
                    Start Searching for free Photos and Videos!
                 </div >
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    fetchData={fetchData}
                    addToRecent={addToRecent}
                    savedRecentSearch={savedRecentSearch}
                    setImageArray={setImageArray}
                    setSearchWord={setSearchWord}
                    setHasError={setHasError}
                    clicked={clicked}
                />

            </div>


        </div>
    )
}
