import { Link } from "react-router-dom";

export default function CategoryBanner({ bgImage, categoryLabel }) {
  return (
    <div className="category-banner">
      <img src={bgImage} alt="banner image" loading="lazy" />
      <div className="banner-content">
        <p>{categoryLabel}</p>
        <Link to="/shop">SHOP NOW</Link>
      </div>
    </div>
  );
}
