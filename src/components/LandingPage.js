import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { BsSearch } from 'react-icons/bs';

export const LandingPage = ({ query, setQuery, fetchData }) => {
    const [navbar, setNavbar] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 64) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    // useEffect(() => {
    //     changeBackground()
    //     // adding the event when scroll change background
    //     window.addEventListener("scroll", changeBackground)
    // })

    const bgImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    const bgImage2 = "https://images.pexels.com/photos/6622889/pexels-photo-6622889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    const styles = {
        header: {
            backgroundImage: `url(${bgImage2})`,
            // height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }

    const setSearch =(e)=> {
        setTimeout(()=> {
            setQuery(e.target.value)
        }, 2000)
    }

    const submitData =(e) => {
        e.preventDefault();
        fetchData()
    }
  
    return (
        <div className="h-[500px]" style={styles.header}>
            <Header navbar={navbar} />
            <div className=" text-center mt-28">

                <div className="font-extrabold text-4xl text-white">
                    Start Searching for free Photos and Videos!
                 </div >

                <form className="sm:w-[500px] w-5/6 h-14 mx-auto mt-5  bg-white rounded-sm flex"
                // onSubmit={()=>submitData()}
                >
                    <input 
                    type="text" 
                    placeholder="Search for free Photos & Videos"
                    className=" placeholder:text-lg placeholder:font-semibold outline-none rounded-md w-full h-full px-3"
                    onChange={(e)=> setSearch(e)}
                    />
                    <BsSearch
                        fontSize="2rem"
                        className="text-dark m-auto mr-3 cursor-pointer" />
                </form>

                <div className="text-white">sushi, indian food,  meat,  restaurant , tomato,  food  more</div>
            </div>


        </div>
    )
}
