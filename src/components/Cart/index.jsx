import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";
import { useCart } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems } = useCart();

    return (
        <div className="cart-page">

            <Navbar />

            <main className="cart-container">

                <div className="cart-header">

                    <button
  className="continue-shopping"
  onClick={() => navigate("/products")}
>
  ← Continue Shopping
</button>

                    <h1>Your Cart</h1>

                </div>

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <h2>Your cart is empty</h2>

                        <p>
                            Add some products to your cart.
                        </p>

                        <button onClick={() => navigate("/products")}>
  Start Shopping
</button>

                    </div>

                ) : (

                    <div className="cart-content">

                        <div className="cart-items">

                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.productId}
                                    item={item}
                                />
                            ))}

                        </div>

                        <CartSummary />

                    </div>

                )}

            </main>

        </div>
    );
};

export default Cart;