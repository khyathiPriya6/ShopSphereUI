import "./styles.css";

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">

            <div className="product-image">
                Product Image
            </div>

            <div className="product-details">

                <p className="product-category">
                    {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="product-bottom">

                    <span className="product-price">
                        ₹{product.price}
                    </span>

                    <span className="product-rating">
                        ★ {product.rating}
                    </span>

                </div>

                <button className="add-cart-button">
                    Add to Cart
                </button>

            </div>

        </div>
    );
};

export default ProductCard;