import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPeopleGroup, FaXTwitter } from 'react-icons/fa6'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { BsHouses } from 'react-icons/bs'
import './dropdown.css'
//import Theme from './theme'


const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <div className='dropdown_menu'>
        <div className="icon_container" onClick={toogleMenu}>
            <AiOutlineBars className='menu_logo'/>
        </div>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='Menu_content'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}
                >
                    <div className="Menu_content-container flex">
                    <div className='menu_item'>
                        <h1 className="menu_item_title">
                            <BsHouses className='Menu_Icon'/>
                            <span>Company</span>
                        </h1>
                        <div className="menuitem_list">
                        <li>About</li>
                        <li>Join the team</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact Us</li>
                        <li>Help center</li>
                        </div>
                        <div className='Social_icon flex'>
                            <FaXTwitter className='Social_icons'/>
                            <FiFacebook className='Social_icons'/>
                            <FiInstagram className='Social_icons'/>
                        </div>
                    </div>


                    <div className='menu_item'>
                        <h1 className="menu_item_title">
                            <FaPeopleGroup className='Menu_Icon'/>
                            <span>Community</span>
                        </h1>
                        <div className="menuitem_list ">
                        <li>Become a Contributor</li>
                        <li>Topics</li>
                        <li>Trends</li>
                        <li>Collection</li>
                        <li>Awards</li>
                        <li>Stats</li>
                        </div>
                    </div>

                    <div className='Social_icon2 flex'>
                            <FaXTwitter className='Social_icons'/>
                            <FiFacebook className='Social_icons'/>
                            <FiInstagram className='Social_icons'/>
                        </div>

                    <button className="login2  bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-medium px-2 py-1 rounded hover:opacity-90 transition-opacity"
                    >
                        <p className="log_in">
                        Log in 
                        </p>
                        <div className="divider"></div>
                        <p className="sign_up">
                        Sign Up
                        </p>
                    </button>
                    </div>

                    <div className="footer_divider"></div>

                    <div className="footer">
                        <div className="footer1 flex">
                            <p>Lincense</p>
                            <p>Privacy Policy</p>
                            <p>Terms</p>
                            <p>Security</p>
                        </div>
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default DropDown