import React from 'react'

import imageUrls from '../data.jsx'
import './galarry.css'

const Gallary = () => {


  return (
    <>

   <div className="gallery">
    {imageUrls.map((item, index) =>{
        return(
            <div className='pics' key={index} 
            >
                <img src={item.src} alt="PhotoSplash" style={{width: '100%'}}/>

            </div>
        )
    } )}
   </div>
   </>
  )
}

export default Gallary