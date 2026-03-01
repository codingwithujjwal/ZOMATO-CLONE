import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const responce = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName: firstName + " " + lastName,
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
        <h2>User Register</h2>
        <p className="subtitle">Create your account to order food quickly.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>First name</label>
              <input type="text" name="firstName" placeholder="John" />
            </div>

            <div className="field">
              <label>Last name</label>
              <input type="text" name="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="●●●●●●●●" />
          </div>

          <button className="btn primary" type="submit">
            Create account
          </button>
        </form>

        <div className="footer">
          <Link to="/user/login">Already have an account? Log in instead.</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
