import React from "react";
import Food from "../../assets/Burger.webp";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BrowseRecipes() {
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  const handleSeeRecipe = (index) => {
    // console.log(recipeData[index]);
    const selectedRecipe = recipeData[index];
    navigate("/showRecipes", { state: { recipe: selectedRecipe } })
  };
  useEffect(() => {
    axios
      .get("http://localhost:5289/api/Recipe/GetAllRecipes")
      .then((apiData) => {
        setRecipeData(apiData.data);
        // console.log(apiData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-8 ml-11 underline">Recipes</h2>
      <div className="flex flex-col container mx-auto pt-5 pb-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {recipeData.length > 0 ? (
            recipeData.map((recipe, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95 h-full flex flex-col justify-between"
              >
                <img
                  src={recipe.imageUrl}
                  alt="Food"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-gray-50 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold">{recipe.title}</h3>
                  <p className="text-xs text-gray-600">
                    Main Category:
                    <span className="font-medium">{recipe.mainCategory}</span>
                    <br />
                    Sub Category:
                    <span className="font-medium">{recipe.subCategory}</span>
                  </p>
                  <p className="mt-2 text-xs text-justify truncate-3-lines flex-grow">
                    {recipe.description}
                  </p>
                  <div className="flex justify-end mt-3">
                    <button
                      className="px-3 py-1 text-xs font-semibold text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors"
                      onClick={() => handleSeeRecipe(index)}
                    >
                      See Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Recipes Available</div>
          )}
        </div>
      </div>
    </main>
  );
}
