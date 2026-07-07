import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";

import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      login(res.data.user, res.data.token);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue tracking your carbon footprint."
    >
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <FaEnvelope />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <FaLock />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
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

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <Link to="#">Forgot Password?</Link>
        </div>

        <Button type="submit">Login</Button>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/register">Register</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
