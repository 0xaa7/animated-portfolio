import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import Links from "./links/Links";
import Togglebutton from "./togglebutton/Togglebutton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at calc(100% - 50px) 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at calc(100% - 50px) 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    
    setOpen(false);
  }, []);

  return (
    <motion.div className="sidebar" initial={false} animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
