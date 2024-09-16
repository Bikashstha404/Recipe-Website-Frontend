import React from "react";
import burgerImage from "../../assets/Burger.jpeg"; // Make sure the path to your image is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faPaperPlane,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
const ShowRecipes = () => {
  const location = useLocation();
  const { recipe } = location.state || {};
  let recipeArray;
  if (recipe) {
    recipeArray = recipe.preparation.split("\n");
  }
  const handleSaveRecipe = () => {
    console.log("Recipe Saved");
  };

  return (
    <>
      {recipe ? (
        <div className="flex flex-col flex-grow bg-white p-5  w-full max-w-7xl">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
              <p
                className="text-gray-600 mb-4 text-justify"
                style={{ width: "50vw" }}
              >
                {recipe.description}
              </p>
            </div>
            <img
              src={recipe.imageUrl}
              alt="Burger"
              className="h-56 object-cover rounded"
              style={{ width: "25vw" }}
            />
          </div>
          <div className="flex space-x-10 mb-5">
            <div>
              <p className="font-semibold">Prep Time:</p>
              <p>{recipe.prepTime}</p>
            </div>
            <div>
              <p className="font-semibold">Calories:</p>
              <p>{recipe.calories}</p>
            </div>
            <div
              className="flex items-center mt-5"
              style={{ marginLeft: "auto" }}
            >
              <p className="text-lg font-semibold mr-2">404 Ratings</p>
              <div className="flex text-yellow-400">★★★★☆</div>
            </div>
          </div>
          <div className="flex space-x-10">
            <div>
              <p className="font-semibold">Category:</p>
              <p>{recipe.mainCategory}</p>
            </div>
            <div>
              <p className="font-semibold">Sub-Category:</p>
              <p>{recipe.subCategory}</p>
            </div>
            <div className="flex " style={{ marginLeft: "auto" }}>
              <textarea
                id="description"
                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Give Feedback"
                rows="3"
                style={{ height: "60px", width: "20vw" }}
              ></textarea>
              <div className="flex mt-10 ml-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-sm cursor-pointer mr-2"
                  style={{ fontSize: "15px" }}
                />
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-sm cursor-pointer"
                  style={{ fontSize: "15px" }}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-1/2 pr-8">
              <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-xl font-bold mb-2">Preparation:</h2>
              <ol className="list-decimal list-inside">
                {recipeArray.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex mt-5">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={handleSaveRecipe}
            >
              Save Recipe
            </button>
          </div>
        </div>
      ) : (
        <p>No Recipes Clicked</p>
      )}
    </>
  );
};

export default ShowRecipes;
