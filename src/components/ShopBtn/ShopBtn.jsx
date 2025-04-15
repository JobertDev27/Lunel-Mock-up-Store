import { useNavigate } from "react-router-dom";

export default function ShopBtn() {
  const navigate = useNavigate();

  return (
    <button
      className="shop-btn"
      onClick={() => {
        navigate("/shop");
      }}
    >
      SHOP NOW
    </button>
  );
}
