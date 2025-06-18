import {motion} from 'framer-motion'

const Links = () => {
  const items=["Homepage","Services","Portfolio","Contact","About"]
  const variants={
    open:{
       y:10,
       transition:{
        y:0,
        staggerChildren:0.2,

       }
    },
    closed:{
      y:0,
      transition:{
        y:-10,
       staggerChildren:0.1,
      }
}
  }
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item)=><motion.a href={`#${item}`} key={item} variants={variants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>)}
    </motion.div>
  )
}

export default Links
