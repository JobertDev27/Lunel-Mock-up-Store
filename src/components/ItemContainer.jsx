export default function ItemContainer({ image, title, price, onClick }) {
  return (
    <div className="item-frame" onClick={onClick}>
      <img src={image} alt={title + "image"} className="item-thumbnail" />
      <div className="item-content">
        <strong className="item-name">{title}</strong>
        <p className="item-price">{price}</p>
      </div>
    </div>
  );
}
