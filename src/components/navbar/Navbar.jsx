import { useState, useEffect } from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import NavLinks from './links/NavLinks';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollingUp = prevScrollPos > currentScrollPos;

    setVisible(scrollingUp || currentScrollPos < 100); 
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${visible ? '' : 'hidden'}`}>
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PICK YOUR PURR!
        </motion.span>
        <NavLinks />

      </div>
    </div>
  );
};

export default Navbar;
