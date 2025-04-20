// eslint-disable-next-line
import { motion } from "motion/react";
import "./style/main.css";

// Components imports
import Header from "./components/Header/Header";
import ShopBtn from "./components/ShopBtn/ShopBtn";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";

// Image imports
import bg2 from "./assets/bg2.webp";
import truck from "./assets/truck.png";
import days from "./assets/days.png";
import material from "./assets/material.png";
import credit from "./assets/credit-card.png";
import catBg1 from "./assets/clothing-category-bg.webp";
import catBg2 from "./assets/accessory-category-bg.webp";
import catBg3 from "./assets/cosmetics-category-bg.webp";
import pfp from "./assets/user-image.webp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="landing-page-bg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="bg-filter"
          >
            <p className="qoute-text">"Effortless. Elevated. Lunel."</p>
            <ShopBtn />
          </motion.div>
        </section>
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
          <img
            className="image-box"
            src={bg2}
            alt="woman in shadow"
            loading="lazy"
          />
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
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          id="testimonial-section"
        >
          <div>
            <img
              className="profile-pic"
              src={pfp}
              alt="picture of woman"
              loading="lazy"
            />
          </div>
          <div>
            <b>"Absolutely stunning."</b>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              I came across Lunel while searching for a timeless piece to mark a
              special moment—and I couldn't be more impressed. The craftsmanship
              is exceptional, and the packaging felt like opening a secret. It’s
              clear that every detail, from the design to the finish, is done
              with intention. I've worn my piece every day since it arrived and
              constantly get compliments. Truly a luxury experience from start
              to finish.
            </p>
            <b>— Isabelle M.</b>
          </div>
        </motion.section>
        <footer>
          <div>
            <b>Menu</b>
            <p>Home</p>
            <p>Shop</p>
            <p>Contact us</p>
          </div>
          <div>
            <b>Categories</b>
            <p>Clothing</p>
            <p>Accessiories</p>
            <p>cosmetics</p>
            <p>Jewelry</p>
          </div>
          <div>
            <b>Social Media</b>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Pinterest</p>
          </div>
          <div id="copyright-footer">
            <p>Copyright &copy;2025 Designed by: Jobertdev27</p>
          </div>
        </footer>
      </main>
    </>
  );
}
