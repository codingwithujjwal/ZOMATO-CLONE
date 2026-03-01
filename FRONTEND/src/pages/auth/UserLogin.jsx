import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const responce = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );

    console.log(responce.data);

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>User Login</h2>
        <p className="subtitle">Sign in to continue to your account.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="●●●●●●●●" />
          </div>

          <button className="btn primary" type="submit">
            Log in
          </button>
        </form>
        <div className="footer">
          <Link to="/user/register">Don't have an account? Register now.</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
