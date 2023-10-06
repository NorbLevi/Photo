import React, {useState} from 'react'
import { motion } from 'framer-motion'

const LoginForm = () => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)

    function handleFlip () {
        if(!isAnimated) {
            setIsFlipped(isFlipped)
            setIsAnimated(true)
        }
    }

  return (
    <div className='flex items-center justify-center h-[400px] cursor-pointer bg-slate-200'>
        <div className='flip_card w-[400px] rounded-md' onClick={handleFlip}>
            <motion.div 
            className="flip_card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition={{duration: 0.6, animationDirection: 'normal'}}
            onAnimationComplete={() => setIsAnimated(false)}
            >
            
            <div className="flip_card-login w-[100%] h-[100%] items-center justify-center text-black bg-slate-300">
                    <h1 className='text-2xl font-bold'>Log In</h1>
                    <form className="form_log-in gap-3 h-[80%]">
                        <div className="form_input-field flex  gap-3">
                            <label htmlFor="Email & Username">Email</label>
                            <input type="text" className="input_field" placeholder='Email & UserName'/>
                        </div>

                        <div className="form_input-field flex gap-[10px]">
                            <label htmlFor="Password">Password</label>
                            <input type="Password" className="input_field" placeholder='Password'/>
                        </div>
                    </form>
                    <p className='text-blue font-sans' onClick={handleFlip}> Create an account</p>
                </div>
                
                <div className="flip_card-signup w-[100%] h-[100%] items-center justify-center text-white bg-slate-300">
                    <h1 className='text-2xl font-bold'>Register</h1>
                    <form className="form_log-in h-[100%] justify-center items-center">
                        <div className="form_input-field justify-between gap-[10px]">
                            <label htmlFor="Email & Username">Email</label>
                            <input type="text" className="input_field" placeholder='Email & UserName'/>
                        </div>

                        <div className="form_input-field justify-between gap-[10px]">
                            <label htmlFor="Email & Username">Name</label>
                            <input type="text" className="input_field" placeholder='Email & UserName'/>
                        </div>

                        <div className="form_input-field justify-between gap-[10px]">
                            <label htmlFor="Email & Username">Phone Number</label>
                            <input type="text" className="input_field" placeholder='Phone number'/>
                        </div>

                        <div className="form_input-field justify-between gap-[10px]">
                            <label htmlFor="Password">Password</label>
                            <input type="Password" className="input_field" placeholder='Password'/>
                        </div>
                    </form>
                    <p className='text-blue font-sans' onClick={handleFlip}> Login</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default LoginForm