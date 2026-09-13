import "./styles.css";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                ShopSphere
            </div>

            <div className="navbar-actions">
                <button className="cart-button">
                    Cart
                </button>

                <button className="logout-button">
                    Logout
                </button>
            </div>

        </nav>
    );
};

export default Navbar;