import "./styles.css";
import { useCart } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const { getCartItemCount } = useCart();

  const cartItemCount = getCartItemCount();

  return (
    <nav className="navbar">

      <div
        className="navbar-logo"
        onClick={() => navigate("/products")}
      >
        ShopSphere
      </div>

      <div className="navbar-actions">

        <button
          className="cart-button"
          onClick={() => navigate("/cart")}
        >
          🛒 Cart

          {cartItemCount > 0 && (
            <span className="cart-count">
              {cartItemCount}
            </span>
          )}
        </button>

        <button className="logout-button">
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar; 