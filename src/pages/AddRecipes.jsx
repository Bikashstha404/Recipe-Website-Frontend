import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddRecipes() {
  const categories = [
    { value: "desserts", label: "Desserts" },
    { value: "main-dishes", label: "Main Dishes" },
    // Add more categories as needed
  ];

  const subCategories = {
    desserts: [
      { value: "cakes", label: "Cakes" },
      { value: "cookies", label: "Cookies" },
      // Add more sub-categories as needed
    ],
    "main-dishes": [
      { value: "pasta", label: "Pasta" },
      { value: "steak", label: "Steak" },
      // Add more sub-categories as needed
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
  };

  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-8 ml-11 underline">Add Recipes</h2>
      <form>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-11"
                placeholder="Enter recipe title"
              />
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-11"
                placeholder="Enter recipe description"
                rows="6"
                style={{ height: "150px", overflowY: "auto" }}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <label
              htmlFor="recipe-image"
              className="flex flex-col justify-center items-center w-4/5 h-64 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-3xl text-gray-800"
                />
                <p className="mb-2 text-sm text-gray-500">
                  <i className="fas fa-upload"> Click icon to add picture</i>
                </p>
              </div>
              <input id="recipe-image" type="file" className="hidden" />
            </label>
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
            <input
              type="text"
              id="prep-time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter prep time"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="calories"
            >
              Calories
            </label>
            <input
              type="number"
              id="calories"
              className="ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter calories"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ml-11">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="sub-category"
            >
              Sub-Category
            </label>
            <select
              id="sub-category"
              className="ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              disabled={!selectedCategory}
            >
              <option value="">Select sub-category</option>
              {subCategoryOptions.map((subCat) => (
                <option key={subCat.value} value={subCat.value}>
                  {subCat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 ml-11">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients
          </label>

          {ingredients.map((ingredient, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-center">
                
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
            </div>
          ))}

          <button
            type="button"
            onClick={addIngredient}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-72"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </main>

    // <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    //   <h1 className="text-3xl font-bold mb-6">Add Recipe</h1>
    //   <form>
    //     {/* Recipe Title and Image Upload */}

    //     </div>

    //     {/* Description */}

    //     {/* Prep Time, Calories, Category */}

    //       <div>
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
    //           Category
    //         </label>
    //         <select
    //           id="category"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         >
    //           <option value="appetizer">Appetizer</option>
    //           <option value="main-course">Main Course</option>
    //           <option value="dessert">Dessert</option>
    //         </select>
    //       </div>
    //     </div>

    //     {/* Ingredients */}

    //     {/* Preparation Steps */}
    //     <div className="mb-6">
    //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preparation">
    //         Preparation
    //       </label>
    //       <textarea
    //         id="preparation"
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Enter preparation steps"
    //         rows="4"
    //       ></textarea>
    //     </div>

    //     {/* Buttons */}
    //     <div className="flex justify-end space-x-4 mt-6">
    //       <button
    //         type="button"
    //         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //       >
    //         Discard
    //       </button>
    //       <button
    //         type="submit"
    //         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
