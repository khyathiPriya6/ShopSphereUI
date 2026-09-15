import { useCart } from "../../context/CardContext";

import "./styles.css";

const CartSummary = () => {

    const {
        cartItems,
        getCartTotal
    } = useCart();

    const subtotal = getCartTotal();

    const shipping = subtotal >= 1000 ? 0 : 50;

    const total = subtotal + shipping;

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

                <span>
                    Items ({totalItems})
                </span>

                <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                </span>

            </div>

            <div className="summary-row">

                <span>Shipping</span>

                <span>
                    {shipping === 0
                        ? "Free"
                        : `₹${shipping}`}
                </span>

            </div>

            <div className="summary-divider" />

            <div className="summary-total">

                <span>Total</span>

                <span>
                    ₹{total.toLocaleString("en-IN")}
                </span>

            </div>

            <button className="checkout-button">
                Proceed to Checkout
            </button>

        </div>
    );
};

export default CartSummary;