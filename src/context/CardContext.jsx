import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) => item.productId === product.productId
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.productId === product.productId
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.productId !== productId
            )
        );
    };

    const increaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.productId === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const getCartItemCount = () => {
        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    };

    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                getCartItemCount,
                getCartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};