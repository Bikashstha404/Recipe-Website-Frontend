import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddMealPlans() {
  const [days, setDays] = useState(3);

  const handleDaysChange = (e) => {
    setDays(parseInt(e.target.value, 10));
  };

  const handleAddDay = () => {
    setDays((prevDays) => prevDays + 1);
  };

  const handleDeleteDay = (dayToDelete) => {
    console.log(dayToDelete);
    // setDays((prevDays) => {prevDays.filter((day) => day !== dayToDelete)});
    setDays((prevDays) => Math.max(prevDays - 1, 0));
  };

  const groupedDays = [];
  for (let i = 0; i < days; i += 4) {
    groupedDays.push(
      Array.from({ length: Math.min(4, days - i) }, (_, idx) => i + idx + 1)
    );
  }

  const [recipes, setRecipes] = useState("");
  const handleBrowseRecipes = () => {
    setRecipes("Egg and Breakfast");
  };

  return (
    <>
      <main className="mx-auto pt-5 pb-8 w-full max-w-7xl">
        <h2 className="text-4xl font-bold mb-4 ml-11 underline">
          Add Meal Plan
        </h2>
        <div className="flex flex-col gap-2 ml-11 max-w-xs">
          <div className="flex items-center gap-2">
            <label htmlFor="days" className="font-bold w-40">
              No. of Days:
            </label>
            <input
              type="number"
              id="days"
              className="border border-gray-300 p-2 rounded w-full"
              value={days}
              onChange={handleDaysChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="title" className="font-bold w-40">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 p-2 rounded w-full"
              defaultValue="Meat Diet"
            />
          </div>
        </div>

        <div className="ml-11 mt-6">
          <h2 className="text-2xl font-bold mb-4">Meal Plans</h2>

          {groupedDays.map((daysGroup, groupIndex) => (
            <div key={groupIndex} className="flex gap-10 mb-8">
              {daysGroup.map((day) => (
                <div
                  key={day}
                  className="bg-gray-200 p-4 rounded-lg shadow-lg w-64"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Day {day}</h3>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteDay(day)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Calories: 300</p>
                  <p className="font-semibold mb-2">Breakfast</p>

                  {recipes ? (
                    <div className="flex justify-between">
                      <p className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4">
                        {recipes}
                      </p>
                      <button
                        onClick={() => setRecipes("")}
                        className="text-red-500"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <button className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4" onClick={handleBrowseRecipes}>
                        Browse Recipes
                      </button>
                      <button className="bg-gray-400 text-gray-700 px-3 py-1 rounded w-3/4">
                        Saved Recipes
                      </button>
                    </div>
                  )}

                  <p className="font-semibold mb-2">Lunch</p>
                  <div className="flex flex-col items-center gap-2">
                    <button className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4">
                      Browse Recipes
                    </button>
                    <button className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4">
                      Saved Recipes
                    </button>
                  </div>
                  <p className="font-semibold mb-2">Dinner</p>
                  <div className="flex flex-col items-center gap-2">
                    <button className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4">
                      Browse Recipes
                    </button>
                    <button className="bg-gray-400 text-gray-900 px-3 py-1 rounded w-3/4">
                      Saved Recipes
                    </button>
                  </div>
                </div>
              ))}

              {groupIndex === groupedDays.length - 1 &&
                daysGroup.length < 4 && (
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
                      onClick={handleAddDay}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                )}
            </div>
          ))}

          {days % 4 === 0 && (
            <div className="flex items-center justify-center mr-24">
              <button
                className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
                onClick={handleAddDay}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          )}

          <div className="flex justify-end gap-2 mr-10">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Cancel
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
              Add
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
