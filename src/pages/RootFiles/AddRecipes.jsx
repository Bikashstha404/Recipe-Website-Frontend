import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import InputMask from "react-input-mask";

export default function AddRecipes() {
  const [recipeFormData, setRecipeFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    calories: "",
    category: "",
    subCategory: "",
    ingredients: [{ quantity: "", name: "" }],
    preparation: "",
    imagePath: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!recipeFormData.title) newErrors.title = "*Recipe title is required";
    if (!recipeFormData.description)
      newErrors.description = "*Description is required";

    if (!image) {
      newErrors.image = "*Image is required";
    }

    if (!recipeFormData.prepTime) {
      newErrors.prepTime = "*Preparation time is required.";
    }
    const [hours, minutes, seconds] = recipeFormData.prepTime
      .split(":")
      .map(Number);
    const [hoursString, minutesString, secondsString] = recipeFormData.prepTime
      .split(":")

    if (secondsString.includes("_") || minutesString.includes("_") || hoursString.includes("_")) {
      newErrors.prepTime = "*Time must be fully filled (HH:mm:ss)";
    }
    if (hours == 0 && minutes == 0 && seconds == 0) {
      newErrors.prepTime = "*Invalid Time";
    }
    if (
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59 ||
      seconds < 0 ||
      seconds > 59
    ) {
      newErrors.prepTime = "*Invalid time format.";
    }

    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 5000);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully:", recipeFormData);
      //   try {
      //     const response = await fetch("http://localhost:5289/Recipe/AddRecipe", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(recipeFormData),
      //     });
      //     const data = await response.json();
      //     console.log(data);
      //   } catch (error) {
      //     console.error("There was an error posting the data!", error);
      //   }
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeFormData({
      ...recipeFormData,
      [name]: value,
    });
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage({
      ...image,
      image: file,
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setRecipeFormData({
        ...recipeFormData,
        imagePath: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
        <h2 className="text-4xl font-bold mb-8 ml-11 underline">Add Recipes</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex flex-col mb-4">
                <label
                  className="text-gray-700 text-lg font-bold ml-11 mb-1"
                  htmlFor="recipe-title"
                >
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="recipe-title"
                  name="title"
                  value={recipeFormData.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-11"
                  placeholder="Enter recipe title"
                />
                {errors.title && (
                  <small className="text-red-500 font-semibold ml-11">
                    {errors.title}
                  </small>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  className="text-gray-700 text-lg font-bold ml-11 mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={recipeFormData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-11"
                  placeholder="Enter recipe description"
                  rows="6"
                  style={{ height: "150px", overflow: "auto" }}
                ></textarea>
                {errors.description && (
                  <small className="text-red-500 font-semibold ml-11">
                    {errors.description}
                  </small>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center">
                <label
                  htmlFor="recipe-image"
                  className="flex flex-col justify-center items-center w-4/5 h-64 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-center items-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="rounded-lg w-[510px] h-[255px]"
                      />
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faImage}
                          className="text-3xl text-gray-800"
                        />
                        <p className="mb-2 text-sm text-gray-500">
                          <i className="fas fa-upload">
                            {" "}
                            Click icon to add picture
                          </i>
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="recipe-image"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {errors.image && (
                <small className="text-red-500 font-semibold ml-11">
                  {errors.image}
                </small>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ml-11">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="prep-time"
                >
                  Prep Time
                </label>
                <InputMask
                  mask="99:99:99"
                  name="prepTime"
                  type="text"
                  id="prep-time"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter prep time (hh:mm:ss)"
                  value={recipeFormData.prepTime}
                  onChange={handleChange}
                />
                {errors.prepTime && (
                  <small className="text-red-500 font-semibold mt-2 block">
                    {errors.prepTime}
                  </small>
                )}
              </div>
            </div>
            <div className="preparationBox flex justify-end space-x-4 mr-16">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
