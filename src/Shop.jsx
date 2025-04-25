import Header from "./components/Header";
import ItemContainer from "./components/ItemContainer";
import { useState } from "react";
import CategoryBox from "./components/CategoryBox";
import "./style/main.css";

import jewelryImg from "./assets/jewelry.webp";
import dressImg from "./assets/dress.webp";
import cosmeticsImg from "./assets/cosmetics.webp";
import shoesImg from "./assets/shoes.webp";
import watchImg from "./assets/watch.webp";
import bagImg from "./assets/bag.webp";
import fragranceImg from "./assets/fragrance.webp";
import Footer from "./components/Footer";

export default function Shop() {
  const [currDisplay, setCurrDisplay] = useState(null);

  const categories = [
    { name: "Jewelry", image: jewelryImg, loadItems: "womens-jewellery" },
    { name: "Dress", image: dressImg, loadItems: "womens-dresses" },
    { name: "Cosmetics", image: cosmeticsImg, loadItems: "beauty" },
    { name: "Shoes", image: shoesImg, loadItems: "womens-shoes" },
    { name: "Watch", image: watchImg, loadItems: "womens-watches" },
    { name: "Bag", image: bagImg, loadItems: "womens-bags" },
    { name: "Fragrance", image: fragranceImg, loadItems: "fragrances" },
  ];

  const ShopRenderer = ({ element }) => {
    return (
      <div>
        {element === null ? (
          <div className="display-container">
            {categories.map((element, index) => {
              return (
                <CategoryBox
                  name={element.name}
                  image={element.image}
                  key={index}
                  setCurrDisplay={setCurrDisplay}
                  loadItems={element.loadItems}
                />
              );
            })}
          </div>
        ) : (
          <>
            <div className="display-container">
              {element?.map((item, key) => {
                return (
                  <ItemContainer
                    image={item?.thumbnail}
                    title={item?.title}
                    price={item?.price}
                    key={key}
                  />
                );
              })}
            </div>
            <div className="end-section">
              <p className="qoute-text">End of products</p>
              <button
                className="return-btn"
                onClick={() => setCurrDisplay(null)}
              >
                Return to Categories
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="shop-main">
        <ShopRenderer element={currDisplay} />
      </main>
      <Footer />
    </>
  );
}
