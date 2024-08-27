import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './auth.css'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [showRoleOption, setShowRoleOption] = useState(true);
  const initialRoles = [
    { value: "", label: "Role" },
    { value: 0, label: "Cook" },
    { value: 1, label: "Food Enthusiast" },
    { value: 2, label: "Planner" },
  ];

  const [type, setType] = useState("password");
  const [isText, setIsText] = useState(false);
  const hideShowPass = () => {
    setIsText(!isText);
    setType(isText ? "password" : "text");
  };
  const roles = showRoleOption ? initialRoles : initialRoles.slice(1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role" && value !== "" && showRoleOption) {
      setShowRoleOption(false);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";

    setErrors(newErrors);
    setTimeout(()=>{
      setErrors((prevErrors) => ({ 
        ...prevErrors, 
        username: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: "", 
      }));
    },5000)
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Signing up with", formData);
      navigate("/login");
    }
  };

  return (
    <main className="background">
    <div className="container">
      <div className="formBox bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <small className="text-red-500">{errors.username}</small>
            )}
          </div>

          <div className="mb-4">
            <select
              name="role"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.role}
              onChange={handleChange}
              required
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
            {errors.role && (
              <small className="text-red-500">{errors.role}</small>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <input
                type={type}
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={hideShowPass}
              >
                <FontAwesomeIcon icon={isText ? faEyeSlash : faEye} />
              </span>
            </div>
            {errors.password && (
              <small className="text-red-500">{errors.password}</small>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <input
                type={type}
                name="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={hideShowPass}
              >
                <FontAwesomeIcon icon={isText ? faEyeSlash : faEye} />
              </span>
            </div>
            {errors.confirmPassword && (
              <small className="text-red-500">{errors.confirmPassword}</small>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
}
