import "./styles.css";
import { useCart } from "../../context/CardContext";


const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div
            className="product-image product-clickable"
            onClick={() => onProductClick(product.productId)}
>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} />
        ) : (
          <span>No Image</span>
        )}
      </div>

      <div className="product-details">
        <p className="product-category">{product.categoryName}</p>

        <h3
            className="product-name-clickable"
            onClick={() => onProductClick(product.productId)}
        >
            {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="product-stock">
            {product.stockQuantity} available
          </span>
        </div>

        <button
          className="add-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;