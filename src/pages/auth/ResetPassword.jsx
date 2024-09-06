import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [type, setType] = useState("password");
  const [isText, setIsText] = useState(false);
  const hideShowPass = () => {
    setIsText(!isText);
    setType(isText ? "password" : "text");
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    emailToken:"",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [searchParams] = useSearchParams();
  formData.email = searchParams.get('email');
  formData.emailToken = searchParams.get('code').replace(/ /g, '+');;

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.emailToken) newErrors.emailToken = "EmailToken is required";
    if (!formData.newPassword) newErrors.newPassword = "Password is required";
    if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = " Confirm Password is required";

    setErrors(newErrors);
    setTimeout(() => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        newPassword: "",
        confirmPassword: "",
      }));
    }, 5000);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Stops form from being submit
    if(validate()){
      try{
        console.log("FormData: ",formData);
        const response = await fetch("http://localhost:5289/api/Auth/ResetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Reponse: ", response)
        const data = await response.json();
        console.log("Data:", data)
        if (response.ok) {
          alert(data.message)
          navigate("/login");
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: data.message || "Something went wrong",
          }));
          setTimeout(() => {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
          }, 5000);
        }
      }catch (error){
        console.error("There was an error posting the data!", error);
      }
    }
  };



  return (
    <>
      <main className="background">
        <div className="container">
          <div className="formBox bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Reset Password
            </h2>
            <form>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type={type}
                    name="newPassword"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                    value={formData.newPassword}
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
                {errors.newPassword && (
                  <small className="text-red-500 font-semibold">
                    {errors.newPassword}
                  </small>
                )}
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type={type}
                    name="confirmPassword"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm Password"
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
                  <small className="text-red-500 font-semibold">
                    {errors.confirmPassword}
                  </small>
                )}
                {errors.email && (
                  <small className="text-red-500 font-semibold">
                    <br />
                    {errors.email}
                  </small>
                )}
                {errors.emailToken && (
                  <small className="text-red-500 font-semibold">
                    <br />
                    {errors.emailToken}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleSubmit}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
