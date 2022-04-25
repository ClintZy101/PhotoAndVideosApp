import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'


export const PhotoGallery = ({ imageArray }) => {
    return (
        <div className="mt-5  grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3">
            {imageArray.map((img, index) => (
                <div key={img.id} className="cursor-pointer mx-auto relative group">
                    <p className="absolute top-2 text-slate-100 left-2 group-hover:flex hidden">{img.alt}</p>
                    <img src={img.src.original} alt="" className="rounded-sm   h-full w-full" />

                    
                    
                    <div className=" absolute bottom-0 group-hover:flex hidden space-x-3 items-center justify-between bg-black w-full bg-opacity-10 p-2">
                    <a href={img.photographer_url} className="text-slate-200 hover:text-white ">by: {img.photographer}</a>
                    <span className="flex items-center ">
                        <HiDownload fontSize="2rem" className="text-slate-200 hover:text-white" />
                        <BsHeart fontSize="1.5rem" className="text-slate-200 hover:text-white" /></span>
                        
                    </div>


                </div>
            ))}
        </div>
    )
}

