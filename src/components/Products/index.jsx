import { useState } from "react";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import ProductList from "../../components/ProductList";

import products from "../../data/products";

import "./styles.css";

const Products = () => {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "" ||
            product.category === selectedCategory;

        const matchesMinPrice =
            minPrice === "" ||
            product.price >= Number(minPrice);

        const matchesMaxPrice =
            maxPrice === "" ||
            product.price <= Number(maxPrice);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice
        );
    });

    return (
        <div className="products-page">

            <Navbar />

            <main className="products-container">

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div className="products-content">

                    <Filters
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                    />

                    <section className="products-section">

                        <div className="products-heading">
                            <h2>Products</h2>

                            <span>
                                {filteredProducts.length} products
                            </span>
                        </div>

                        <ProductList
                            products={filteredProducts}
                        />

                    </section>

                </div>

            </main>

        </div>
    );
};

export default Products;