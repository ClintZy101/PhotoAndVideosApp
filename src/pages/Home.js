
import axios from "axios";
import { useEffect, useState } from "react";
import { GrLinkTop } from 'react-icons/gr'
import { Header } from "../components/Header";

import { LandingPage } from '../components/LandingPage'
import { Menu } from "../components/Menu";
import { PhotoGallery } from "../components/PhotoGallery";
import photos from '../json/photos.json'

export default function Home() {

    const [data, setData] = useState({})
    const [query, setQuery] = useState('')
    const [navbar, setNavbar] = useState(false)
    const [topIcon, setTopIcon] = useState(false)
    const [imageArray, setImmageArray] = useState(photos.photos)
    const [searchWord, setSearchWord] = useState('')
    // const [recentSearch, setRecentSearch] =useState([])
    
    
    const fetchData =async () => {
       
        const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

        const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=80
  &key=${API_KEY}`

        setSearchWord(query)

        await axios.get(URL).then(res => setImmageArray(res.data.photos))
    }

    // const addToRecent = () => {
    //     const recentSearch = []
    //     recentSearch.push(searchWord)
    //     localStorage.setItem('recent', JSON.stringify(recentSearch)) 
    // }

    // useEffect(()=> {
    //     addToRecent()

    // const savedRecentSearch = localStorage.getItem('recent')
    // console.log(savedRecentSearch)
    // },[searchWord])

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    const scrollToTop = () => {
        if (window.scrollY >= 570) {
            setTopIcon(true)
        } else {
            setTopIcon(false)
        }
    }


    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);

    })
    useEffect(() => {
        scrollToTop();
        window.addEventListener("scroll", scrollToTop);
    })


    const backToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const title = searchWord.charAt(0).toUpperCase() + searchWord.slice(1);

    
    return (
        <div >
            {navbar ? <Header navbar={navbar} query={query} setQuery={setQuery} fetchData={fetchData} /> : null}


            <LandingPage query={query} setQuery={setQuery} fetchData={fetchData} navbar={navbar} />

            <Menu />

            {/* Image Gallery Trending Photos */}
            <div>
                {searchWord ? 
                (<h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">{title} Photos</h1>) 
                : (<h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">Trending Stock Photos</h1>)}
                {imageArray.length === 0 ? (<div className="mx-auto text-center font-bold text-zinc-500 mt-5"> Ooops... No Image Available. Please try another search keyword.</div>) : <PhotoGallery imageArray={imageArray} /> }
                
            </div>

            <div
                onClick={() => backToTop()}
                className={`${topIcon ? "hover:scale-105 cursor-pointer sticky bottom-2 grid items-center justify-center bg-zinc-400 hover:bg-zinc-300 p-3 mx-auto w-max rounded-full " : null}`}>
                <GrLinkTop
                    fontSize="2rem"
                    className=" m-auto "
                />

            </div>
        </div>
    )
}