import React from "react";
import EggBacon from "../../assets/EggBacon.jpeg";
import StrawberryShake from "../../assets/StrawberrryShake.jpeg";

export default function ShowMealPlans() {
  const MealItem = ({ name, calories, image }) => {
    return (
      <div className="flex mt-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600">Calories: {calories}</p>
        </div>
      </div>
    );
  };
  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-6 ml-11 underline">Meal Plans</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-200 p-6 rounded-lg ml-10 max-w-3xl w-full">
          <h2 className="text-xl font-bold">Day 1</h2>
          <p className="text-gray-600 mb-4">Calories: 300</p>

          {/* Updated Grid with Proper Column Sizes */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
            {/* Breakfast & Lunch Section */}
            <div>
              <h3 className="font-bold">Breakfast</h3>
              <MealItem name="Egg and Bacon" calories={200} image={EggBacon} />
              <MealItem
                name="Strawberry Milkshake"
                calories={200}
                image={StrawberryShake}
              />

              <h3 className="font-bold mt-4">Lunch</h3>
              <MealItem name="Egg and Bacon" calories={200} image={EggBacon} />
              <MealItem
                name="Strawberry Milkshake"
                calories={200}
                image={StrawberryShake}
              />
            </div>

            {/* Divider Section */}
            <div className="flex items-stretch">
              <div className="border-l-2 border-black"></div>
            </div>

            {/* Dinner Section */}
            <div>
              <h3 className="font-bold">Dinner</h3>
              <MealItem name="Egg and Bacon" calories={200} image={EggBacon} />
              <MealItem
                name="Strawberry Milkshake"
                calories={200}
                image={StrawberryShake}
              />

              <div className="mt-20 flex justify-center">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 flex items-center">
                  Next Day
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg max-w-sm w-full">
          <h2 className="text-xl font-bold underline mb-6">
            Generate Shopping List
          </h2>
          <div className="flex justify-center items-center min-h-[425px]">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
              Generate
            </button>
          </div>
        </div>
      </div>
    </main>

  );
}
