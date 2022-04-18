// import { Header } from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";


export default function App() {
  // const [red, green, blue] = [69, 111, 225]
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')
  const [photosArray, setPhotosArray] = useState([])

  const API_KEY = "563492ad6f917000010000016d2acc99e5dd4ac3bf721f89844b899e"

  const fetchData = () => {

    const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=80
  &key=${API_KEY}`

    axios.get(URL).then(res => setData(res))
  }

  const fetchPopularVideos = () => {
    const URL = "https://api.pexels.com/videos/popular"

    axios.get(URL).then(res => console.log(res))
  }
  const fetchPopularPhotos = () => {
    const URL = "https://api.pexels.com/v1/popular?per_page=80"

    axios.get(URL).then(res => setPhotosArray(res.data.photos))
  }


  // landscape: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  // large: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  // large2x: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  // medium: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350"
  // original: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
  // portrait: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
  // small: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=130"
  // tiny: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"

  const ImageUrlArray = photosArray.map(photo => photo.src.tiny)

  useEffect(() => {
    // fetchData()
    // fetchPopularVideos()
    fetchPopularPhotos()

  }, [query])

  // console.log(photosArray)
  console.log(ImageUrlArray)


  return (
    <div >
      <LandingPage query={query} setQuery={setQuery} fetchData={fetchData} />
      <div>
        <div className="space-x-7  w-full text-center font-semibold text-gray-600 mt-5 text-xl ">
          <span className=" cursor-pointer  p-3 border-b-2">Home</span>
          <span className="hover:text-light cursor-pointer">Discover</span>
          <span className="hover:text-light cursor-pointer">Photos</span>
          <span className="hover:text-light cursor-pointer">Videos</span>
          <span className="hover:text-light cursor-pointer">Leaderboard</span>
        </div>
        {/* <hr className="text-gray mt-5"/> */}
      </div>

      <div>
        <h1>Images</h1>
        <div className="flex-wrap place-content-center grid gap-3 grid-cols-3">
        {ImageUrlArray.map((url, index) => (
          <div key={index} className="cursor-pointer">
            <img src={url} alt="" />
          </div>
        ))}
        </div>
       
      </div>
    </div>
  )
}