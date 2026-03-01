import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const nevigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );

    console.log(response.data);
    nevigate("/create-food");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Food Partner Login</h2>
        <p className="subtitle">Sign in to manage your orders and menu.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="owner@business.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="●●●●●●●●" />
          </div>
          <button className="btn primary" type="submit">
            Sign in
          </button>
        </form>
        <div className="footer">
          <Link to="/food-partner/register">
            Don't have an account? Register your business.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
