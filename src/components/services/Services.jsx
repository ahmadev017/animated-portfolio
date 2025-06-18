import './Services.scss'
import { motion } from 'framer-motion'
const Services = () => {
  const variants={
    initial:{
      x:-500,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        staggerChildren:0.2,
        duration:1,
        delay:1.2,
      }
    }
  }
  return (

    <motion.div className='services' >
      <motion.div className="mainWrapper" variants={variants} initial='initial' whileInView='animate'>      
        <motion.div className="text" variants={variants}>
         <p> I focus on helping your brand grow <br />and move forward</p>
         <hr />
      </motion.div>
      <motion.div className="heading" variants={variants}>
        <motion.div className="wrapper"variants={variants}>        
          <motion.div className="head1" variants={variants}> 
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
          
          </motion.div>
        <motion.div className="head2" variants={variants}>
        <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business</h1>
        <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.99}}>What we Do?</motion.button>
      </motion.div></motion.div>

      </motion.div>
      
      <motion.div className="boxContainer" variants={variants}>
             <div className="boxWrap">
                      <motion.div className="box" whileHover={{background:"white",color:"black",scale:1.1}}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut reiciendis distinctio! Labore, at recusandae rem culpa fugit tempore obcaecati, similique neque assumenda, eaque ex impedit et. Illo, suscipit sequi.</p>
            <motion.button whileHover={{ scale:1.05}} whileTap={{scale:0.99}}>Go</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"white",color:"black",scale:1.1}}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut reiciendis distinctio! Labore, at recusandae rem culpa fugit tempore obcaecati, similique neque assumenda, eaque ex impedit et. Illo, suscipit sequi.</p>
            <motion.button whileHover={{ scale:1.05}} whileTap={{scale:0.99}}>Go</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"white",color:"black",scale:1.1}}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut reiciendis distinctio! Labore, at recusandae rem culpa fugit tempore obcaecati, similique neque assumenda, eaque ex impedit et. Illo, suscipit sequi.</p>
            <motion.button whileHover={{ scale:1.05}} whileTap={{scale:0.99}}>Go</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"white",color:"black",scale:1.1}}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut reiciendis distinctio! Labore, at recusandae rem culpa fugit tempore obcaecati, similique neque assumenda, eaque ex impedit et. Illo, suscipit sequi.</p>
            <motion.button whileHover={{ scale:1.05}} whileTap={{scale:0.99}}>Go</motion.button>
        </motion.div>
        </div>

      </motion.div></motion.div>

    </motion.div>
  )
}

export default Services
