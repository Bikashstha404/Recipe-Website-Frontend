import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [type, setType] = useState("password");
  const [isText, setIsText] = useState("false");
  const hideShowPass = () => {
    setIsText(!isText);
    setType(isText ? "password" : "text");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpClick = () => {
    navigate("/signUp"); 
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); //Stops form from being submit
    if (validate()) {
      console.log("Signing up with", formData);
      navigate("/browseRecipes");
    }
  };

  return(
    <>
        <h2>Login</h2>
        <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type={type}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span onClick={hideShowPass}>
            <FontAwesomeIcon icon={isText ? faEyeSlash : faEye} />
          </span>
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <div>
        Don't have account?
          <button type="button" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
        </form>
    </>
  )
}
