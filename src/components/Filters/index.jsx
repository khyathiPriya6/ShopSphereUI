import "./styles.css";

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) => {
  const handleClearFilters = () => {
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <aside className="filters">

      <div className="filters-header">
        <h3>Filters</h3>

        <button
          className="clear-filters"
          onClick={handleClearFilters}
        >
          Clear
        </button>
      </div>

      <div className="filter-group">
        <label htmlFor="category">
          Category
        </label>

        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="1">Electronics</option>
          <option value="2">Clothing</option>
          <option value="3">Books</option>
          <option value="4">Home & Kitchen</option>
          <option value="5">Fitness</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="min-price">
          Minimum Price
        </label>

        <input
          id="min-price"
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          min="0"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="max-price">
          Maximum Price
        </label>

        <input
          id="max-price"
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          min="0"
        />
      </div>

    </aside>
  );
};

export default Filters;