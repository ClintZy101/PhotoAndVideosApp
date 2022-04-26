import React from 'react'
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div className="space-x-7  w-full text-center font-semibold text-gray-600 mt-5 text-xl ">

            <Link to="/">
                <span className="hover:text-light cursor-pointer   p-3 border-b-2">Photos</span>
            </Link>
            <Link to="/videos">
                <span className="hover:text-light cursor-pointer">Videos</span>
            </Link>
            <span className="hover:text-light cursor-pointer">Discover</span>
            <span className="hover:text-light cursor-pointer">Photographers</span>

        </div>
    )
}
