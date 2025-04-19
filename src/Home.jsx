// eslint-disable-next-line
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import "./style/main.css";

// Components imports
import Header from "./components/Header/Header";
import ShopBtn from "./components/ShopBtn/ShopBtn";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";

// Image imports
import bg2 from "./assets/bg2.jpg";
import truck from "./assets/truck.png";
import days from "./assets/days.png";
import material from "./assets/material.png";
import credit from "./assets/credit-card.png";
import catBg1 from "./assets/clothing-category-bg.jpg";
import catBg2 from "./assets/accessory-category-bg.jpg";
import catBg3 from "./assets/cosmetics-category-bg.jpg";

export default function Home() {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { margin: "-50px" });
  const [headerColor, setHeaderColor] = useState("white");

  useEffect(() => {
    setHeaderColor(isInView ? "white" : "black");
  }, [isInView]);

  return (
    <main>
      <Header color={headerColor} />
      <section id="landing-page-bg"></section>
      <motion.section id="landing-page" ref={pageRef}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="qoute-text"
        >
          "Effortless. Elevated. Lunel."
        </motion.p>
        <ShopBtn />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{
          amount: 0.5,
          once: true,
          ease: "easeInOut",
        }}
        id="qoute-section"
      >
        <img className="image-box" src={bg2} alt="woman in shadow" />
        <div>
          <p className="qoute-text">
            “Crafted for the moment. Designed for forever.”
          </p>
          <ShopBtn />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.9, once: true }}
        id="benefit-container"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={truck} alt="" />
          <p>FREE SHIPPING</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={days} alt="" />
          <p>30 DAYS RETURN</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={credit} alt="" />
          <p>SAFE PAYMENT</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={material} alt="" />
          <p>HIGH QUALITY MATERIAL</p>
        </motion.div>
      </motion.section>
      <section id="category-section">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 1 }}
          className="qoute-text"
        >
          CATEGORIES
        </motion.h1>

        <div className="banner-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.9, once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{ width: "fit-content" }}
          >
            <CategoryBanner bgImage={catBg1} categoryLabel={"CLOTHING"} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1, once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{ width: "fit-content" }}
          >
            <CategoryBanner bgImage={catBg2} categoryLabel={"ACCESSORIES"} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.9, once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{ width: "fit-content" }}
          >
            <CategoryBanner bgImage={catBg3} categoryLabel={"COSMETICS"} />
          </motion.div>
        </div>
      </section>
      <section id="call-to-action-section">
        <div id="bg-filter">
          <p className="qoute-text">
            "Where craftsmanship meets legacy, brilliance is born."
          </p>
          <ShopBtn />
        </div>
      </section>
      <section id="testimonial-section"></section>
      <footer>
        <p className="qoute-text">hello</p>
      </footer>
    </main>
  );
}
