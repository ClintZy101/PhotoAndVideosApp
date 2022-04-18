import React from 'react'
import {HiMenuAlt2} from 'react-icons/hi'

export const Header = ({navbar}) => {


    return (
        <div className={`sticky top-0 h-16   items-center px-5 py-2 flex justify-between text-white font-sans font-bold text-xl ${navbar ? 'bg-dark text-light': null}`}>

            <div className=" font-thin">
                Media Library
            </div>
            <div className="space-x-4  ">
                <span className="hover:text-light cursor-pointer">Home</span>
                <span className="hover:text-light cursor-pointer">Photos</span>
                <span className="hover:text-light cursor-pointer">Videos</span>
            </div>
            <HiMenuAlt2 fontSize="2rem" className="cursor-pointer hover:text-gray" />
        </div>
    )
}