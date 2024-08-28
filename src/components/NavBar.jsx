import React from "react";
import { useState } from "react";
import RecipeLogo from "../assets/RecipeLogo.png";
import Profile from "../assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  const handleBrowseRecipes = () => {
    navigate("/browseRecipes");
  };

  const handleAddRecipes = () => {
    navigate("/addRecipes");
  };
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <aside className="w-60 bg-gradient-to-b from-gray-800 to-gray-700 text-white flex flex-col items-center py-6  shadow-xl">
        <div className="flex items-center mb-8 px-4 w-full">
          <img
            src={RecipeLogo}
            alt="Logo"
            className="w-9 h-9 mr-3 rounded-full"
          />
          <h1 className="text-lg font-bold">Bikash’s Recipes</h1>
        </div>

        <div className="flex flex-col items-center mb-4 w-full">
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-2">
            <span className="w-full h-full">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
          <p className="text-white">Bikash Shrestha</p>
        </div>

        <nav className="flex flex-col w-full mt-4">
          <button
            className="bg-gray-700 hover:bg-gray-600 py-3 w-full text-left pl-6"
            onClick={handleBrowseRecipes}
          >
            Browse Recipes
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 py-3 w-full text-left pl-6"
            onClick={handleAddRecipes}
          >
            Browse Meal Plans
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 py-3 w-full text-left pl-6">
            Saved Recipes
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 py-3 w-full text-left pl-6">
            Saved Meal Plans
          </button>
          <div className="relative w-full">
            <button
              className="bg-gray-700 hover:bg-gray-600 py-3 w-full text-left pl-6"
              onClick={toggleDropdown}
            >
              Settings
              <FontAwesomeIcon icon={faCaretDown} className="ml-32" />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col w-full bg-gray-700">
                <button className="w-full text-left bg-teal-700 hover:bg-white-600 py-2 pl-10">
                  Edit Profile
                </button>
                <button
                  className="w-full text-left bg-red-600 hover:bg-red-500 py-2 pl-10"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}
