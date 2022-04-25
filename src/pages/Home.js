
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
    const [photosArray, setPhotosArray] = useState([])
    const [videoData, setVideoData] = useState([])
    const [navbar, setNavbar] = useState(false)
    const [topIcon, setTopIcon] = useState(false)
    const ImageUrlArray = photos.photos.map(photo => photo.src.tiny)
    const imageArray = photos.photos
    console.log(imageArray)
    
    const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

    const fetchData = () => {

        const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=80
  &key=${API_KEY}`

        axios.get(URL).then(res => setData(res))
    }

    // const fetchPopularVideos = async () => {
    //     // const URL = "https://api.pexels.com/videos/popular"
    //     const URL = `https://api.pexels.com/videos/popular?per_page=80&key=${API_KEY}`

    //    await axios.get(URL).then(res => setVideoData(res.videos))

    //     console.log(videoData)
    // }

    // const fetchPopularPhotos = async () => {
    //     const URL = `https://api.pexels.com/v1/popular?per_page=80&key=${API_KEY}`

    //     await axios.get(URL).then(res => setPhotosArray(res.data.photos))
    // }



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

    return (
        <div >
            {navbar ? <Header navbar={navbar} query={query} setQuery={setQuery} /> : null  }
            
            <LandingPage query={query} setQuery={setQuery} fetchData={fetchData} navbar={navbar} />

            <Menu />
           
            {/* Image Gallery Trending Photos */}
            <div>
                <h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">Trending Stock Photos</h1>
                <PhotoGallery imageArray={imageArray} />
            </div>

            <div
                onClick={() => backToTop()}
                className={`${topIcon ? "hover:scale-105 cursor-pointer sticky bottom-2 grid items-center justify-center bg-zinc-200 hover:bg-zinc-300 p-3 mx-auto w-max rounded-full " : null}`}>
                <GrLinkTop
                    fontSize="2rem"
                    className=" m-auto"
                />

            </div>
        </div>
    )
}