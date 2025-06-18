import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./Slider.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Slider = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="slider" variants={variants} animate={open ? "open" : "closed"}>

        <Links />
<ToggleButton setOpen={setOpen} />
      
    </motion.div>
  );
};

export default Slider;
