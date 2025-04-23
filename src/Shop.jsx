import Header from "./components/Header/Header";
import useFetch from "./components/UseFetch/useFetch";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import "./style/main.css";

export default function Shop() {
  const dress = useFetch("womens-dresses");
  const cosmetics = useFetch("beauty");
  const jewelry = useFetch("womens-jewellery");
  const bag = useFetch("womens-bags");
  const shoes = useFetch("womens-shoes");
  const watch = useFetch("womens-watches");
  const fragrance = useFetch("fragrances");

  console.log(dress);
  return (
    <>
      <Header />
      <main>
        <div className="items-list">
          {dress?.map((item) => (
            <ItemContainer
              image={item?.thumbnail}
              title={item?.title}
              price={item?.price}
            />
          ))}
        </div>
      </main>
    </>
  );
}
