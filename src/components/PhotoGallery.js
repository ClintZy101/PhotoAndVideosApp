
import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'


export const PhotoGallery = ({ imageArray }) => {
    const image = imageArray.map((img=> img.src.large))
    // const styles = {
    //     main: {
    //         backgroundImage: `url(${image})`,
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover'
    //     }
    // }
    
    const responsive = "mt-5 px-3 grid gap-3 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3"

    return (
        <div className={responsive}>
            {imageArray.map((img) => (
                <div key={img.id} className="cursor-pointer mx-auto relative group w-full max-h-96 object-contain">
                    <p className="absolute top-0 text-slate-100 left-0 group-hover:flex hidden bg-black bg-opacity-30 p-2 w-full">{img.alt}</p>
                    <img src={img.src.large} alt="" className=" h-full w-full" />

                    <div className=" absolute group-hover:flex -bottom-10 group-hover:-translate-y-10 delay-300 transition transform  ease-out duration-500 hidden space-x-3 items-center justify-between bg-black w-full bg-opacity-30 p-2">
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

