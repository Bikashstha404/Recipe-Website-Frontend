import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './auth.css'

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [type, setType] = useState("password");
  const [isText, setIsText] = useState(false);
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
    setTimeout(()=>{
      setErrors((prevErrors) => ({ 
        ...prevErrors, 
        email: "",
        password: "" 
      }));
    },5000)
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordForm(true);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setShowForgotPasswordForm(false);
    setForgotPasswordEmail("");
  };

  const handleForgotPasswordEmail = (e) => {
    console.timeLog(e.target)
    const email = e.target.value;
    setForgotPasswordEmail(email);
  };
  
  const handleCloseForgotPasswordForm = () => {
    setShowForgotPasswordForm(false);
    setForgotPasswordEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Stops form from being submit
    if (validate()) {
      if (formData.password !== "admin123") {
        setErrors((prevErrors) => ({ ...prevErrors, password: "Incorrect Password" }));
        setShowForgotPassword(true);

        setTimeout(()=>{
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        },5000)
      } else {
        console.log("Logging in with", formData);
        navigate("/browseRecipes");
      }
    }
  };

  return (
    <>
      <main className="background">
        <div className="container">
          <div className="formBox bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form>
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
              {showForgotPassword && (
                <div className="mb-4">
                  <p
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleSubmit}
              >
                Login
              </button>

              <div className="text-center mt-4">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        {showForgotPasswordForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleCloseForgotPasswordForm}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h2 className="text-2xl font-bold text-center mb-4">
                Forgot Password
              </h2>
              <form>
                <input
                  type="email"
                  name="forgotPasswordEmail"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={forgotPasswordEmail}
                  onChange={handleForgotPasswordEmail}
                  required
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleCloseForgotPasswordForm}
                    className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200 mr-2"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleForgotPasswordSubmit}
                    className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-2"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
