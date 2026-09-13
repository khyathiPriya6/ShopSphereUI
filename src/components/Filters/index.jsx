import "./styles.css";

const Filters = ({
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice
}) => {

    return (
        <aside className="filters">

            <h3>Filters</h3>

            <div className="filter-section">

                <h4>Category</h4>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ""}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                    />
                    All
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Electronics"
                        checked={selectedCategory === "Electronics"}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                    />
                    Electronics
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Clothing"
                        checked={selectedCategory === "Clothing"}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                    />
                    Clothing
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Footwear"
                        checked={selectedCategory === "Footwear"}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                    />
                    Footwear
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Accessories"
                        checked={selectedCategory === "Accessories"}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                    />
                    Accessories
                </label>

            </div>

            <div className="filter-section">

                <h4>Price</h4>

                <input
                    className="price-input"
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                    className="price-input"
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

            </div>

        </aside>
    );
};

export default Filters;