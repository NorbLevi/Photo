import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Categories = [
    'Wallpaper', '3D Renders', 'Nature', 'Texture & Patterns',
    'Arcitecture & Interior', 'Film', 'Street Photography', 
    'Experimental', 'Animals', 'Fashion & Beauty', 'Buisness & Work',
    'Food & Drink', 'Travel',
]

const CategoriesCarousel = () => {

    const carouselref = useRef(null);

    const scroll = (scrollOffset) => {
        const container = carouselref.current;
        const currentScrollLeft = container.scrollLeft;
        const newScrollLeft = currentScrollLeft + scrollOffset;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if  (newScrollLeft < 0){
            container.scrollLeft = 0;
        }else if(newScrollLeft > maxScrollLeft){
            container.scrollLeft = maxScrollLeft
        }else{
            container.scrollLeft = newScrollLeft
        }
    }

return (
    <div className="category_carousel ">

        <motion.div 
        ref={carouselref}
        className="category_container"
        initial={{x: 0}}
        whileTap={{cursor: 'grabbing'}}
        >
            {Categories.map((category, index) => (
                <div className='category-item' key={index}>
                    {category}
                </div>
            ))}
        </motion.div>
        
        <div className="carousel-controls">
            <div className="scroll-button left" onClick={() => scroll(-100)}>
                <FaChevronLeft/>
            </div>

            <div className="scroll-button right" onClick={() => scroll(+100)}>
                <FaChevronRight/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesCarousel