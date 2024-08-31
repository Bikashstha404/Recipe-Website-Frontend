import React from "react";
import Food from "../assets/Burger.webp";

export default function BrowseRecipes() {
  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-8 ml-11 underline">Recipes</h2>
      <div className="flex flex-col container mx-auto pt-5 pb-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95"
            >
              <img
                src={Food}
                alt="Food"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-3 bg-gray-50">
                <h3 className="text-base font-semibold">Burger</h3>
                <p className="text-xs text-gray-600">
                  Category:{" "}
                  <span className="font-medium">Entrees, Sandwiches</span>
                </p>
                <p className="mt-2 text-xs text-justify truncate-3-lines">
                  This juicy, flavorful burger is made with high-quality beef,
                  caramelized onions, fresh lettuce, and a special homemade
                  sauce, all served in a toasted bun. Perfect for a satisfying
                  meal! This is just a checkup if the text overflows or not.
                </p>
                <div className="flex justify-end mt-2">
                  <button className="px-3 py-1 text-xs font-semibold text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors">
                    See Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
