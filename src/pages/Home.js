
import axios from "axios";
import { useEffect, useState } from "react";
import { GrLinkTop } from 'react-icons/gr'
import { Header } from "../components/Header";
import { LandingPage } from '../components/LandingPage'
import { Menu } from "../components/Menu";
import { PhotoGallery } from "../components/PhotoGallery";
import photos from '../json/photos.json'

export default function Home() {

    const [query, setQuery] = useState('')
    const [navbar, setNavbar] = useState(false)
    const [topIcon, setTopIcon] = useState(false)
    const [imageArray, setImageArray] = useState(photos.photos)
    const [hasError, setHasError] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    // const [recentSearch, setRecentSearch] = useState([])
    const title = searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
    const savedRecentSearch = localStorage.getItem('recent')
    const displayedSearch =  JSON.parse(savedRecentSearch)
    // console.log(displayedSearch)

    const fetchData = async () => {
        try {
            const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

            const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=80&key=${API_KEY}`

            setSearchWord(query)

            await axios.get(URL).then(res => setImageArray(res.data.photos))
            setQuery("")

        } catch (error) {
            setHasError(true)
            console.log(error);
        }

    }

    // const addToRecent = () => {

    //     if(savedRecentSearch){
    //         let updatedSearch =  recentSearch.push(searchWord)
    //         localStorage.setItem('recent', JSON.stringify(updatedSearch)
    //         )
    //     }
    //     else {
    //         localStorage.setItem('recent', JSON.stringify(recentSearch))
    //     } 

    //     console.log(recentSearch) 
    // }

    // useEffect(()=> {
    //     addToRecent()
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
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);

    })
    useEffect(() => {
        scrollToTop();
        window.addEventListener("scroll", scrollToTop);
    })

    // useEffect(()=> {
    //     console.log(query)
    // }, [query])

    return (
        <div >
            {navbar ? <Header navbar={navbar} query={query} setQuery={setQuery} fetchData={fetchData} /> : null}


            <LandingPage query={query} setQuery={setQuery} fetchData={fetchData}  navbar={navbar} savedRecentSearch={savedRecentSearch} setImageArray={setImageArray}
            setSearchWord={setSearchWord}
            setHasError={setHasError}
            />

            <Menu />

            {/* Image Gallery Trending Photos */}
            {hasError ? <div>Oops... Something went wrong!</div> :
                <div>
                    {searchWord ?
                        (<h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">{title} Photos</h1>)
                        : (<h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">Trending Stock Photos</h1>)}
                    {imageArray.length === 0 ? (<div className="mx-auto text-center font-bold text-zinc-500 mt-5"> Ooops... No Image Available. Please try another search keyword.</div>) : <PhotoGallery imageArray={imageArray} />}
                </div>
            }


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