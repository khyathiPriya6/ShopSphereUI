import { useCart } from "../../context/CardContext";
import products from "../../data/products";
import Navbar from "../../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.productId === Number(productId)
  );

  if (!product) {
    return (
      <div className="product-details-page">
        <Navbar />

        <main className="product-details-container">
          <h2>Product not found</h2>

          <button
            className="back-button"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Navbar />

      <main className="product-details-container">

        <button
          className="back-button"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>

        <div className="product-details-card">

          <div className="product-details-image">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
              />
            ) : (
              <span>No Image</span>
            )}
          </div>

          <div className="product-details-info">

            <p className="product-details-category">
              {product.categoryName}
            </p>

            <h1>{product.name}</h1>

            <p className="product-details-description">
              {product.description}
            </p>

            <div className="product-details-price">
              ₹{product.price.toLocaleString("en-IN")}
            </div>

            <p className="product-details-stock">
              {product.stockQuantity} available
            </p>

            <div className="product-details-actions">

              <button
                className="details-add-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                className="details-cart-button"
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
              >
                Buy Now
              </button>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;