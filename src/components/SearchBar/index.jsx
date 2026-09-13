import "./styles.css";

const SearchBar = ({ search, setSearch }) => {

    return (
        <div className="search-container">

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>
    );
};

export default SearchBar;