import Header from "./components/Header";
import useFetch from "./components/useFetch";
import ItemContainer from "./components/ItemContainer";
import "./style/main.css";
import { useEffect, useState } from "react";

export default function Shop() {
  const [currDisplay, setCurrDisplay] = useState(null);

  const dress = useFetch("womens-dresses");
  const cosmetics = useFetch("beauty");
  const jewelry = useFetch("womens-jewellery");
  const bag = useFetch("womens-bags");
  const shoes = useFetch("womens-shoes");
  const watch = useFetch("womens-watches");
  const fragrance = useFetch("fragrances");

  useEffect(() => {
    setCurrDisplay(dress);
  }, [dress]);

  const ShopRenderer = ({ element }) => {
    return (
      <div className="items-list">
        {element?.map((item, key) => (
          <ItemContainer
            image={item?.thumbnail}
            title={item?.title}
            price={item?.price}
            key={key}
          />
        ))}
      </div>
    );
  };

  console.log(dress);
  return (
    <>
      <Header />
      <main className="shop-main">
        <nav className="category-nav">
          <button
            onClick={() => {
              setCurrDisplay(dress);
            }}
          >
            dress
          </button>
          <button
            onClick={() => {
              setCurrDisplay(bag);
            }}
          >
            bag
          </button>
        </nav>
        <ShopRenderer element={currDisplay} />
      </main>
    </>
  );
}
