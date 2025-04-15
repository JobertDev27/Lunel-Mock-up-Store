import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>LUNEL</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </header>
  );
}
