import "./Hero.scss"
import { motion } from "framer-motion"

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    }
  },
  scrollAnimation:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}

const imageVariants = {
  initial:{
    x:500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
      staggerChildren: 0.2,
    }
  }
}


const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-100%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
     
         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 className="h1-overlay" variants={textVariants} whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} >PICK YOUR PURRR!</motion.h1>
      <motion.p className="p-overlay" variants={textVariants} whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}  >Welcome to my world, where the love for pets meet the art of matchmaking</motion.p>
      </motion.div>

      <motion.div className="scrollContainer" variants={textVariants} initial="initial" animate="animate" >
        <motion.img src="scroll1.png" alt="" variants={textVariants} animate="scrollAnimation"/>
      </motion.div>

      
        <motion.div className="sliderText" variants={sliderVariants} initial="initial" animate="animate" >meow!! meow!! purrr.. purrr...</motion.div>
     

     
      
      <motion.div className="social" variants={textVariants} initial="initial" animate="animate"  >
            <motion.a href='facebook.com' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/facebook.png' alt='' /></motion.a>
            <motion.a href='#' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/insta.png' alt='' /></motion.a>
            <motion.a href='#' target="_blank" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} ><img src='/youtube.png' alt='' /></motion.a>
        </motion.div>

       <div className="imageContainer"  >
        <motion.img  src="kitty2.png" variants={imageVariants} initial="initial" animate="animate" />
      </div>
    </div>
  )
}

export default Hero