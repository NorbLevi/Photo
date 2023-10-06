import React, { useState, useEffect}from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './home.css'

import image1 from '../assets/unsplash (1).jpg'
import image2 from '../assets/unsplash (2).jpg'
import image3 from '../assets/unsplash (3).jpg'
import image4 from '../assets/unsplash (5).jpg'
import { FaSearch } from 'react-icons/fa'

const images = [
    image1, 
    image2,
    image3,
    image4,
]

const Home = () => {

    const [currentImageindex, setCurrentImageindex] = useState(0)

    useEffect(() => {
        const interval = setInterval (() =>{
            setCurrentImageindex((prevIndex) => (prevIndex + 1) % images.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []); 

    return (
       <div className="home_container">
         <div className='Carousel_Container'>
            <AnimatePresence>
                <motion.img
                key={currentImageindex}
                src={images[currentImageindex]}
                alt='Carousel Image'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
                />
            </AnimatePresence>
            <div className="search_div">
                <h1>PhotoSplash</h1>
                <p>The internet's source for visuals</p>
                <p>Powered by crators everywhere</p>
                <div className="Search_input flex">
                    <FaSearch className='icon_search'/>
                    <input type="text" className="Text_input"  placeholder='search'/>
                </div>
            </div>

            
        </div>
        </div>
    )
}

export default Home