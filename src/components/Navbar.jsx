import React from 'react'
import './navbar.css'
import CategoriesCarousel from './CategoriesCarousel'
import DropDown from './DropDown'


import { BsCamera, BsSearch } from 'react-icons/bs'


const Navbar = () => {
  return (
   <nav className='navbar '>
     <div className='navbar_A flex'>
        <BsCamera className='app_logo'/>

        <div className="app_search">
            <div className="search_btn">
                <BsSearch className='search_icon'/>
                <input type="text" className="search_input" placeholder='Search high-resolution images'/>
            </div>
        </div>

        <section className="brands">
            <ul className='brand_list'>
                <li className='brand'>Explore</li >
                <li className='brand'>Advertise</li >
                <li className='brand'>PhotoSplash+</li >
            </ul>
        </section>

        <div className="divider"></div>

        <section className="login">
        <button className="flex w-[100%] bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-medium px-2 py-1 rounded hover:opacity-90 transition-opacity"
        >
        <p className="log_in">
        Log in 
        </p>
        <div className="divider"></div>
        <p className="sign_up">
            Sign Up
        </p>
      </button>
        </section>

        <div className="fevorites">
            <button className="my_fevorites">
                <p>My Collection</p>
            </button>
        </div>

        <section className="menu">
            <DropDown/>
        </section>
    </div>

    <div className="categories flex ">
        <div className='editorial flex'>
            <p>Editorial</p>
            <p>PhotoSplash+</p> 
        </div>
    
        <div className="divider2"></div>

        <CategoriesCarousel/>
    </div>
   </nav>

    
  )
}

export default Navbar