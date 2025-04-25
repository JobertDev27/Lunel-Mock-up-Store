import useFetch from "../components/useFetch";

export default function CategoryBox({
  name,
  image,
  setCurrDisplay,
  loadItems,
}) {
  const products = useFetch(loadItems);
  return (
    <div className="category-box" onClick={() => setCurrDisplay(products)}>
      <img className="category-image" src={image} alt={name + " image"} />
      <div className="overlay">
        <p className="category-label">{name}</p>
      </div>
    </div>
  );
}
