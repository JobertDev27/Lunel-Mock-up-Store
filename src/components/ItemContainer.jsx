export default function ItemContainer({ image, title, price }) {
  return (
    <div className="item-frame">
      <img src={image} alt="" className="item-thumbnail" />
      <div className="item-content">
        <strong className="item-name">{title}</strong>
        <p className="item-price">{price}</p>
      </div>
    </div>
  );
}
