import { Link } from "react-router-dom";

export default function Header({ color }) {
  return (
    <header style={{ color: color }}>
      <h1>LUNEL</h1>
      <nav>
        <Link style={{ color: color }} to="/">
          HOME
        </Link>
        <Link style={{ color: color }} to="/shop">
          SHOP
        </Link>
        <Link style={{ color: color }} to="/contact">
          CONTACT US
        </Link>
        <Link style={{ color: color }} to="/cart">
          CART
        </Link>
      </nav>
    </header>
  );
}
