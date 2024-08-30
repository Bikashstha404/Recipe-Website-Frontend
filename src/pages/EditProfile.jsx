import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("../browseRecipes");
  };
  const handleCancel = () => {
    navigate("../browseRecipes");
  };
  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-6 ml-11 underline">Edit Profile</h2>
      <form className="ml-11">
        {/* Name Input */}
        <div className="flex items-center mb-4">
          <label
            className="block text-gray-700 font-medium w-32"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="w-72 px-3 py-2 border border-gray-300 rounded"
            id="name"
            type="text"
            placeholder="Bikash Shrestha"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center mb-4">
          <label
            className="block text-gray-700 font-medium w-32"
            htmlFor="email"
          >
            Email:
          </label>
          <div className="relative w-72">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="email"
              type="email"
              placeholder="bikash@gmail.com"
              readOnly
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
            </span>
          </div>
        </div>

        {/* Role Input */}
        <div className="flex items-center mb-6">
          <label
            className="block text-gray-700 font-medium w-32"
            htmlFor="role"
          >
            Role:
          </label>
          <div className="relative w-72">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="role"
              type="text"
              placeholder="Cook"
              readOnly
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
            </span>
          </div>
        </div>

        <div className="flex ml-64 mt-8 space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Update
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProfile;
