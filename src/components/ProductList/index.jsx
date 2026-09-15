import ProductCard from "../ProductCard";
import "./styles.css";

const ProductList = ({ products, onProductClick }) => (
  <div className="product-list">

    {products.length === 0 ? (
      <p className="no-products">
        No products found.
      </p>
    ) : (
      products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product}
          onProductClick={onProductClick}
        />
      ))
    )}

  </div>
);

export default ProductList;