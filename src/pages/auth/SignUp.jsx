import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
  const [isText, setIsText] = useState("false");
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
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Stops form from being submit
    if (validate()) {
      console.log("Signing up with", formData);
      navigate("/login");
    }
  };

  return (
    <>
      <h2>SignUp</h2>
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && (
            <small className="text-danger">{errors.username}</small>
          )}
        </div>

        <div>
          <label>Role</label>
          <select
            name="role"
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
          {errors.role && <small className="text-danger">{errors.role}</small>}
        </div>

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

        <div>
          <label>Confirm Password:</label>
          <input
            type="{type}"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span onClick={hideShowPass}>
            <FontAwesomeIcon icon={isText ? faEyeSlash : faEye} />
          </span>
          {errors.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <div>
          Already have a account?
          <button type="button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
