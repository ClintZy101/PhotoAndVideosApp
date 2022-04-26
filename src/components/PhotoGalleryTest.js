import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'



export const PhotoGallery = ({ imageArray }) => {
    const image = imageArray.map((img => img.src.large))
    // console.log(image)
    const styles = {
        main: {
            backgroundImage: `url(${image})`,
            // height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }
    
    const responsive = "mt-5 px-3 grid gap-3 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3"
    return (
        <div className={responsive}>
            {imageArray.map((img) => (
                <div key={img.id} style={{
                    backgroundImage: `url(${img.src.large})`,
                    // height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="cursor-pointer mx-auto relative group w-full max-h-96 object-contain">
                    <p className="absolute top-2 text-slate-100 left-2 group-hover:flex hidden">{img.alt}</p>
                    {/* <img src={img.src.large} alt="" className=" h-full w-full" /> */}

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