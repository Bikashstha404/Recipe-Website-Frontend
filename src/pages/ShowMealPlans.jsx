import React from "react";
import EggBacon from "../assets/EggBacon.jpeg";
import StrawberryShake from "../assets/StrawberrryShake.jpeg";

export default function ShowMealPlans() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Meal Plan Section */}
        <div className="col-span-2 bg-gray-300 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 underline">3 Day Meal Plan</h1>

          {/* Day 1 Section */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-xl font-bold">Day 1</h2>
            <p className="text-gray-600 mb-4">Calories: 300</p>

            <div className="grid grid-cols-3 gap-8">
              {/* Meals Section */}
              <div>
                <h3 className="font-bold">Breakfast</h3>
                <MealItem name="Egg and Bacon" calories={200} />
                <MealItem name="Strawberry Milkshake" calories={200} />

                <h3 className="font-bold mt-4">Lunch</h3>
                <MealItem name="Egg and Bacon" calories={200} />
                <MealItem name="Strawberry Milkshake" calories={200} />
              </div>

              {/* Divider */}
              <div className="flex justify-center items-center">
                <div className="border-l-2 border-black h-full"></div>
              </div>

              {/* Dinner Section */}
              <div>
                <h3 className="font-bold">Dinner</h3>
                <MealItem name="Egg and Bacon" calories={200} />
                <MealItem name="Strawberry Milkshake" calories={200} />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 flex items-center">
                Next Day
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Shopping List Section */}
        <div className="bg-gray-300 p-8 rounded-lg">
          <h2 className="text-xl font-bold underline mb-6">
            Generate Shopping List
          </h2>
          <div className="flex justify-center">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// MealItem component
const MealItem = ({ name, calories }) => {
  return (
    <div className="flex items-center mt-4">
      <img
        src="https://via.placeholder.com/60" // Placeholder image, replace with your image source
        alt={name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-600">Calories: {calories}</p>
      </div>
    </div>
  );
};
