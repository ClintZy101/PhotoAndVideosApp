
import axios from "axios";
import { useEffect, useState } from "react";
import { GrLinkTop } from 'react-icons/gr'
import { Header } from "../components/Header";

import { LandingPage } from '../components/LandingPage'
import { Menu } from "../components/Menu";


export default function Home() {
    // const [red, green, blue] = [69, 111, 225]
    const [data, setData] = useState({})
    const [query, setQuery] = useState('')
    const [photosArray, setPhotosArray] = useState([])
    const [videoData, setVideoData] = useState([])
    // const [videoFiles, setVideoFiles] = useState([])

    const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

    const fetchData = () => {

        const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=80
  &key=${API_KEY}`

        axios.get(URL).then(res => setData(res))
    }

    const fetchPopularVideos = () => {
        // const URL = "https://api.pexels.com/videos/popular"
        const URL = `https://api.pexels.com/videos/popular?per_page=80&key=${API_KEY}`

        axios.get(URL).then(res => setVideoData(res.data.videos))

        // setVideoFiles(videoData.map(v => v.video_files))

    }
    // videoFiles: Array
    const videoFiles = videoData.map(v => v.video_files)
    const videoObject = videoFiles.map(v => v.link)
    // const HD_Video = videoFiles.filter(vid => vid.quality === 'hd')
    // console.log(videoFiles)
    console.log(videoObject)


    const fetchPopularPhotos = async () => {
        const URL = `https://api.pexels.com/v1/popular?per_page=80&key=${API_KEY}`

        await axios.get(URL).then(res => setPhotosArray(res.data.photos))
    }


    const ImageUrlArray = photosArray.map(photo => photo.src.tiny)


    useEffect(() => {
        // fetchData()
        fetchPopularVideos()
        // fetchPopularPhotos()
    }, [query])



    const [navbar, setNavbar] = useState(false)
    const [topIcon, setTopIcon] = useState(false)

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
            <Header navbar={navbar} query={query} setQuery={setQuery} />
            <LandingPage query={query} setQuery={setQuery} fetchData={fetchData} navbar={navbar} />

            <Menu />


            {/* Test Video */}

            {/* {videosArray?.map((video, index) => (
                <div key={index}>
                    <video width="320" height="240" controls>
                        <source src={video.video_files.link} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                    </video>
                </div>
            ))} */}

            {/* Results */}
            <div>
                <h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5">Trending Stock Photos</h1>
                <div className="mt-5 flex-wrap place-content-center grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {ImageUrlArray.map((url, index) => (
                        <div key={index} className="cursor-pointer mx-auto">
                            <img src={url} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <div
                onClick={() => backToTop()}
                className={`${topIcon ? "sticky bottom-2 grid items-center justify-center bg-zinc-200 p-3 mx-auto w-max rounded-full " : null}`}>
                <GrLinkTop
                    fontSize="2rem"
                    className=" m-auto  cursor-pointer mx-auto text-white"
                />

            </div>
        </div>
    )
}