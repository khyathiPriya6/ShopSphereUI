import { useCart } from "../../context/CardContext";

import "./styles.css";

const CartItem = ({ item }) => {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    return (
        <div className="cart-item">

            <div className="cart-item-image">

                <img
                    src={item.imageUrl}
                    alt={item.name}
                />

            </div>

            <div className="cart-item-details">

                <p className="cart-item-category">
                    {item.categoryName}
                </p>

                <h3>{item.name}</h3>

                <p className="cart-item-description">
                    {item.description}
                </p>

                <p className="cart-item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                </p>

            </div>

            <div className="cart-item-actions">

                <div className="quantity-controls">

                    <button
                        onClick={() =>
                            decreaseQuantity(item.productId)
                        }
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() =>
                            increaseQuantity(item.productId)
                        }
                    >
                        +
                    </button>

                </div>

                <button
                    className="remove-button"
                    onClick={() =>
                        removeFromCart(item.productId)
                    }
                >
                    Remove
                </button>

            </div>

        </div>
    );
};

export default CartItem;