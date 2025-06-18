import { useScroll, useTransform,motion } from 'framer-motion';
import { useRef } from 'react';
import './Parallax.scss'

const Parallax = ({type}) => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start"," end start"]}
  )

  const yText =useTransform(scrollYProgress, [0,1],["0%","500%"])
  const yBg =useTransform(scrollYProgress, [0,1],["0%","100%"])
  return (<>
    <div className='parallax' 
   ref={ref}
    style={{
      background:type=='services'?
      'linear-gradient(180deg,#0c0c1d, #111132)'
      :
      'linear-gradient(180deg,#111132, #0c0c1d)'}}>

     <motion.h1   style={{y:yText}}>{type=='services'?'what we do?':'What we did?'}</motion.h1>
     <div className="mountain">
            <img src="/mountains.png" alt="" />
          </div> 
                   <motion.div className="planets" style={{y:yBg}}>
                   <img src={type === 'services' ? '/planets.png' : '/sun.png'} alt="" />

            
          </motion.div>  
                <motion.div className="stars" style={{x:yBg}}>
          <img src="/stars.png" alt="" />

          
        </motion.div>
    </div></>
  )
}

export default Parallax
