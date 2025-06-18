import './Hero.scss';
import { animate, motion } from 'framer-motion';

const Hero = () => {
  // Text animation variants
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  // Image animation variants
  const imgVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  // Scroll icon animation variants
  const scrollVariants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    animate: {
      y: 10,
      opacity: 2,
      transition: {
        duration: 1,
        repeat: Infinity,

         // Optional: Adds slight delay to make it smoother
      },
    },
  };
  const slideVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">      
    <motion.div className="slidingContent" 
    variants={slideVariant}
           initial='initial'
           animate='animate'
    >
        <h1>Writer Content Creater Influencer</h1>
      </motion.div>
      <div className="wrapper">
        {/* Text Container with animation */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Harvey Tyler</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              id="b1"
              whileHover={{ backgroundColor: "lightgray", color: "black", scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.a whileHover={{color:'black'}} href="#Portfolio">See the latest work</motion.a>
            </motion.button>
            <motion.button
              id="b2"
              whileHover={{ backgroundColor: "transparent",color:"white", scale: 1.05 }}
              whileTap={{ scale: 0.99 }} 
            >
            <motion.a whileHover={{color:'white'}} href="#Contact">Contact me</motion.a>
            </motion.button>
          </motion.div>

          <motion.img
           
            src="/scroll.png"
            alt="scroll down"
            variants={scrollVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>


        <motion.div
          className="imageContainer"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img src="/hero.png" alt="hero image" variants={imgVariants} />
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;

