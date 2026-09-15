import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Mock login for now
        if (username && password) {
            navigate("/products");
        }
    };

    const handleForgotPassword = () => {
        console.log("Forgot password clicked");
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <h1>ShopSphere</h1>
                <p className="login-subtitle">Sign in to your account</p>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>

                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <div className="password-container">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                type="button"
                                className="show-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>

                </form>

                <button
                    type="button"
                    className="forgot-password"
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </button>

            </div>
        </div>
    );
};

export default Login;

