export default function AddMealPlans() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold underline mb-4">Edit Meal Plan</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="days" className="block font-semibold">No. of Days:</label>
            <input type="number" id="days" className="border border-gray-300 p-2 rounded w-full" defaultValue="3" />
          </div>
          <div>
            <label htmlFor="title" className="block font-semibold">Title:</label>
            <input type="text" id="title" className="border border-gray-300 p-2 rounded w-full" defaultValue="Meat Diet" />
          </div>
        </div>
      </div>

      {/* Meal Plans Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Meal Plans</h2>
        <div className="flex gap-6 mb-8">
          {/* Day 1 Card */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Day 1</h3>
              <button className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-2">Calories:</p>
            <p className="font-semibold mb-2">Breakfast</p>
            <input type="text" className="border border-gray-300 p-2 rounded w-full mb-2" defaultValue="Egg and Bacons" />
            <p className="font-semibold mb-2">Lunch</p>
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Browse Recipes</button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Saved Recipes</button>
            </div>
          </div>

          {/* Day 2 Card (Same as Day 1) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Day 2</h3>
              <button className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-2">Calories:</p>
            <p className="font-semibold mb-2">Breakfast</p>
            <input type="text" className="border border-gray-300 p-2 rounded w-full mb-2" defaultValue="Egg and Bacons" />
            <p className="font-semibold mb-2">Lunch</p>
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Browse Recipes</button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Saved Recipes</button>
            </div>
          </div>

          {/* Day 3 Card (Same as Day 1) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Day 3</h3>
              <button className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-2">Calories:</p>
            <p className="font-semibold mb-2">Breakfast</p>
            <input type="text" className="border border-gray-300 p-2 rounded w-full mb-2" defaultValue="Egg and Bacons" />
            <p className="font-semibold mb-2">Lunch</p>
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Browse Recipes</button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Saved Recipes</button>
            </div>
          </div>

          {/* Add New Day Card */}
          <div className="flex items-center justify-center">
            <button className="bg-gray-200 rounded-full p-4 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">Update</button>
        </div>
      </div>
    </div>
  );
}
