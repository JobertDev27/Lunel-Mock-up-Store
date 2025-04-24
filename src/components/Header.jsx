// eslint-disable-next-line
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastY || currentY < 10);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="header-motion-wrapper"
    >
      <h1 className="header-title">LUNEL</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </motion.header>
  );
}
