import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner/register",
        {
          name: businessName,
          contactName,
          phone,
          email,
          password,
          address,
        },
        { withCredentials: true }
      );

      console.log(response.data);

      // Redirect after successful registration
      navigate("/create-food");

    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Food Partner Register</h2>
        <p className="subtitle">
          Create a partner account to receive orders.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Business name</label>
            <input
              type="text"
              name="businessName"
              placeholder="My Tasty Kitchen"
              required
            />
          </div>

          <div className="row">
            <div className="field">
              <label>Contact name</label>
              <input
                type="text"
                name="contactName"
                placeholder="Owner name"
                required
              />
            </div>

            <div className="field">
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 555 555 5555"
                required
              />
            </div>
          </div>

          <div className="field">
            <label>Contact email</label>
            <input
              type="email"
              name="email"
              placeholder="owner@business.com"
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              required
            />
          </div>

          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street, City, ZIP"
              required
            />
          </div>

          <button className="btn primary" type="submit">
            Create account
          </button>
        </form>

        <div className="footer">
          <Link to="/food-partner/login">
            Already have a partner account? Log in.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;