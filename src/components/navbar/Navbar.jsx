
import Slider from '../slider/Slider'
import './Navbar.scss'
import {motion} from 'framer-motion'
const Navbar = () => {

const variants={
  initial:{
    opacity:0,
    scale:0.5,
  },
  animate:{
    opacity:1,
    scale:1,
    transition:{
       duration:0.5,

    }
  }
}



  return (
    <div className='navbar'>
<Slider/>
      <div className="wrapper">
        <motion.span variants={variants} 
        initial="initial"
        animate="animate"
        >
          Lama Dev</motion.span>
        <div className="social">
          <a href=""><img src="/instagram.png" alt="" /></a>
          <a href=""><img src="/facebook.png" alt="" /></a>
          <a href=""><img src="/dribbble.png" alt="" /></a>
          <a href=""><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
