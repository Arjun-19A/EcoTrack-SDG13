import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";

import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");

      return;
    }

    try {
      await api.post("/auth/register", {
        name: form.name,

        email: form.email,

        password: form.password,
      });

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <AuthLayout
      title="Create Your Account 🌱"
      subtitle="Start tracking your carbon footprint today."
    >
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <FaUser />

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <FaEnvelope />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <FaLock />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="input-box">
          <FaLock />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit">Create Account</Button>

        <div className="auth-footer">
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
