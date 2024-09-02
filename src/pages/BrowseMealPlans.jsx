import React from "react";
import EggBacon from "../assets/EggBacon.jpeg";
import StrawberryShake from "../assets/StrawberrryShake.jpeg";

export default function BrowseMealPlans() {
  // Initialize an array of 9 meal plans
  const mealPlans = Array(9)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      title: `Meal Plan ${index + 1}`,
      diet: "Meat Diet",
      calories: 3000,
      items: [
        {
          name: "Egg and Bacon",
          calories: 200,
          imageUrl: EggBacon,
        },
        {
          name: "Strawberry Milkshake",
          calories: 200,
          imageUrl: StrawberryShake,
        },
      ],
    }));

  return (
    <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
      <h2 className="text-4xl font-bold mb-8 ml-11 underline">Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-11">
        {mealPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-gray-200 p-4 rounded-lg shadow-md max-w-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className="text-sm font-semibold">{plan.diet}</p>
              <p className="text-sm font-medium text-gray-600 mb-4">
                Calories: {plan.calories}
              </p>
              <div className="mb-4">
                {plan.items.map((item, idx) => (
                  <div key={idx} className="flex items-center mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded mr-2"
                    />
                    <div>
                      <p className="text-md font-semibold">{item.name}</p>
                      <p className="text-md font-medium text-gray-600">
                        Calories: {item.calories}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 self-end">
              See Meal Plan
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
