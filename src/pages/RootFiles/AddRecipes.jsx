import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export default function AddRecipes() {
  const [recipeFormData, setRecipeFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    calories: "",
    mainCategory: "",
    subCategory: "",
    ingredients: "",
    preparation: "",
    imageUrl: "",
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
    } else {
      const [hours, minutes, seconds] = recipeFormData.prepTime
        .split(":")
        .map(Number);
      const [hoursString, minutesString, secondsString] =
        recipeFormData.prepTime.split(":");

      if (
        secondsString.includes("_") ||
        minutesString.includes("_") ||
        hoursString.includes("_")
      ) {
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
    }

    if (!recipeFormData.calories) {
      newErrors.calories = "*Calories is required";
    }

    if (!recipeFormData.mainCategory) {
      newErrors.mainCategory = "*Category is required";
    }
    if (!recipeFormData.subCategory) {
      newErrors.subCategory = "*Sub-Category is required";
    }

    newErrors.ingredients = {};
    ingredients.forEach((ingredient, index) => {
      const ingredientErrors = {};
      if (!ingredient.quantity) {
        ingredientErrors.quantity = `*Quantity is required for ingredient ${
          index + 1
        }`;
      }
      if (!ingredient.name) {
        ingredientErrors.name = `*Name is required for ingredient ${index + 1}`;
      }

      if (Object.keys(ingredientErrors).length > 0) {
        newErrors.ingredients[index] = ingredientErrors;
      }
    });

    if (Object.keys(newErrors.ingredients).length === 0) {
      delete newErrors.ingredients;
    }

    if (!recipeFormData.preparation) {
      newErrors.preparation = "*Sub-Category is required";
    }

    setErrors(newErrors);
    console.log(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 5000);

    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully:", recipeFormData);
      recipeFormData.calories = parseInt(recipeFormData.calories, 10);
      recipeFormData.mainCategory = parseInt(recipeFormData.mainCategory, 10);
      try {
        const response = await fetch(
          "http://localhost:5289/api/Recipe/AddRecipe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(recipeFormData),
          }
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setRecipeFormData({
            title: "",
            description: "",
            prepTime: "",
            calories: "",
            mainCategory: "",
            subCategory: "",
            ingredients: "",
            preparation: "",
            imageUrl: "",
          });

          navigate("/browseRecipes")
          console.log("Recipe added successfully.");
        }
      } catch (error) {
        console.log("Error", error);
      }
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
        imageUrl: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    { value: 0, label: "Appetizers" },
    { value: 1, label: "Main Dishes" },
    { value: 2, label: "Desserts" },
    { value: 3, label: "Drinks" },
  ];

  const subCategories = {
    0: [
      { value: "Salads", label: "Salads" },
      { value: "FingerFoods", label: "Finger Foods" },
      { value: "Soups", label: "Soups" },
    ],
    1: [
      { value: "Pasta", label: "Pasta" },
      { value: "Steak", label: "Steak" },
      { value: "Chicken", label: "Chicken" },
      { value: "Seafood", label: "Sea Food" },
      { value: "Vegetarian", label: "Vegetarian" },
    ],
    2: [
      { value: "Cakes", label: "Cakes" },
      { value: "Cookies", label: "Cookies" },
      { value: "Pies", label: "Pies" },
      { value: "Puddings", label: "Puddings" },
    ],
    3: [
      { value: "Coke", label: "Coke" },
      { value: "Sprite", label: "Sprite" },
      { value: "Coffee", label: "Coffee" },
      { value: "Water", label: "Water" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      setSubCategoryOptions(subCategories[selectedCategory] || []);
    } else {
      setSubCategoryOptions([]);
    }
  }, [selectedCategory]);

  const [ingredients, setIngredients] = useState([{ quantity: "", name: "" }]);
  const addIngredient = () => {
    setIngredients([...ingredients, { quantity: "", name: "" }]);
    setRecipeFormData({
      ...recipeFormData,
      ingredients: [...ingredients, { quantity: "", name: "" }],
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
    setRecipeFormData({ ...recipeFormData, ingredients: newIngredients });
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      [field]: value,
    };
    setIngredients(updatedIngredients);
    setRecipeFormData({ ...recipeFormData, ingredients: updatedIngredients });
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
              <div className="flex justify-center items-center mt-6">
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ml-11">
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
                <small className="text-red-500 font-semibold block">
                  {errors.prepTime}
                </small>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-4"
                htmlFor="calories"
              >
                Calories
              </label>
              <input
                name="calories"
                type="number"
                id="calories"
                className="ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter calories"
                onChange={handleChange}
              />
              {errors.calories && (
                <small className="text-red-500 font-semibold ml-4 block">
                  {errors.calories}
                </small>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ml-11">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mainCategory"
              >
                Category
              </label>
              <select
                name="mainCategory"
                id="mainCategory"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  handleChange(e);
                }}
              >
                <option value="">Select Main Category</option>
                {categories.map((mainCategory) => (
                  <option key={mainCategory.value} value={mainCategory.value}>
                    {mainCategory.label}
                  </option>
                ))}
              </select>
              {errors.mainCategory && (
                <small className="text-red-500 font-semibold block">
                  {errors.mainCategory}
                </small>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-4"
                htmlFor="sub-category"
              >
                Sub-Category
              </label>
              <select
                name="subCategory"
                id="subCategory"
                className="ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedSubCategory}
                onChange={(e) => {
                  setSelectedSubCategory(e.target.value);
                  handleChange(e);
                }}
                disabled={!selectedCategory}
              >
                <option value="">Select sub-category</option>
                {subCategoryOptions.map((subCategory) => (
                  <option key={subCategory.value} value={subCategory.value}>
                    {subCategory.label}
                  </option>
                ))}
              </select>
              {errors.subCategory && (
                <small className="text-red-500 font-semibold block ml-4">
                  {errors.subCategory}
                </small>
              )}
            </div>
          </div>
          <div className="mb-6 ml-11">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ingredients
            </label>
            <div>
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-center"
                >
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={ingredient.quantity}
                    onChange={(e) =>
                      handleIngredientChange(index, "quantity", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={ingredient.name}
                    onChange={(e) =>
                      handleIngredientChange(index, "name", e.target.value)
                    }
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
              {ingredients.map((ingredient, index) => (
                <div key={index}>
                  {errors.ingredients &&
                    errors.ingredients[index] &&
                    errors.ingredients[index].quantity && (
                      <small className="text-red-500 font-semibold mb-2">
                        {errors.ingredients[index].quantity}
                      </small>
                    )}
                  {errors.ingredients &&
                    errors.ingredients[index] &&
                    errors.ingredients[index].name && (
                      <small
                        className={`text-red-500 font-semibold ${
                          errors.ingredients[index].quantity
                            ? "ml-28"
                            : "ml-[326px]"
                        }`}
                      >
                        {errors.ingredients[index].name}
                      </small>
                    )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addIngredient}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-72"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div>
            <div className="relative bottom-[45vh] left-[47vw]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Preparation
              </label>
              <textarea
                name="preparation"
                id="preparation"
                className="shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter preparation steps"
                rows="10"
                value={recipeFormData.preparation}
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.title && (
              <small
                className="text-red-500 font-semibold ml-11"
                style={{ position: "relative", bottom: "45vh", left: "44vw" }}
              >
                {errors.title}
              </small>
            )}
            <div
              className="preparationBox flex justify-end space-x-4 mr-12"
              style={{ position: "relative", bottom: "43vh" }}
            >
              <button
                type="button"
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Discard
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
