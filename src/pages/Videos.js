import React from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import videos from '../json/videos.json'


export const Videos = () => {

    const videoLinks = videos.videos.map(v => v.video_files[0].link)

    return (
        <div>
             <Header />
            <Menu />
            <h1 className="font-semibold text-gray-600 mt-5 text-xl ml-5 mb-5">Popular Videos</h1>
            
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {videoLinks?.map((video, index) => (
                <div key={index} className=" relative">
                    <video width="320" height="240" controls className="mx-auto  cursor-pointer aspect-video">
                        <source src={video} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                    </video>
                    <span className="absolute top-5 left-2 text-white">Clinton</span>
                </div>
            ))} 
            </div>
            
           
        </div>
    )
}
