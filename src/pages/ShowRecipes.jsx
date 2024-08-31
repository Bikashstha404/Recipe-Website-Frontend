import React from "react";
import burgerImage from "../assets/Burger.jpeg"; // Make sure the path to your image is correct

const ShowRecipes = () => {
  return (
    <div className="flex flex-col flex-grow h-screen bg-white p-8">
      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2">Burger</h1>
          <p
            className="text-gray-600 mb-4 text-justify"
            style={{ width: "50vw" }}
          >
            A burger is a classic and versatile dish that typically consists of
            a juicy, seasoned patty made from beef, chicken, or plant-based
            ingredients, nestled between two soft buns. It is often garnished
            with a variety of toppings like crisp lettuce, ripe tomatoes,
            pickles, onions, and melted cheese, and enhanced with condiments
            such as ketchup, mustard, or mayo. Whether grilled, pan-fried, or
            broiled, burgers are beloved for their satisfying combination of
            textures and flavors, making them a go-to meal for casual dining,
            backyard barbecues, and fast food outings.
          </p>
        </div>
        <img
          src={burgerImage}
          alt="Burger"
          className="h-56 object-cover rounded"
          style={{ width: "25vw" }}
        />
      </div>
      <div className="flex space-x-10">
        <div>
          <p className="font-semibold">Prep Time:</p>
          <p>15 minutes</p>
        </div>
        <div>
          <p className="font-semibold">Calories:</p>
          <p>500</p>
        </div>
        <div>
          <p className="font-semibold">Categories:</p>
          <p>Entrees, Sandwich</p>
        </div>
      </div>
    </div>

    //   </div>

    //   {/* Recipe Details */}

    //   {/* Ratings and Feedback */}
    //   <div className="flex items-center mb-6">
    //     <p className="text-lg font-semibold mr-2">404 Ratings</p>
    //     <div className="flex text-yellow-400">
    //       ★★★★☆
    //     </div>
    //   </div>

    //   {/* Ingredients and Preparation */}
    //   <div className="flex justify-between">
    //     {/* Ingredients */}
    //     <div className="w-1/2 pr-8">
    //       <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
    //       <ul className="list-disc list-inside">
    //         <li>1 lb ground beef</li>
    //         <li>Salt and black pepper</li>
    //         <li>4 slices cheddar cheese (optional)</li>
    //         <li>1 large onion, thinly sliced and caramelized</li>
    //         <li>4 leaves fresh lettuce</li>
    //         <li>4 burger buns, toasted</li>
    //       </ul>
    //     </div>

    //     {/* Preparation */}
    //     <div className="w-1/2 pl-8">
    //       <h2 className="text-xl font-bold mb-2">Preparation:</h2>
    //       <ol className="list-decimal list-inside">
    //         <li>
    //           <span className="font-semibold">Step 1:</span> Form the ground
    //           beef into 4 equal patties. Season both sides with salt and black
    //           pepper.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Step 2:</span> Preheat the grill
    //           to medium-high heat. Grill the patties for about 4-5 minutes on
    //           each side, or until they reach your desired level of doneness. If
    //           using, place a slice of cheddar cheese on each patty during the
    //           last minute of grilling.
    //         </li>
    //       </ol>
    //     </div>
    //   </div>

    //   {/* Save Recipe Button */}
    //   <div className="flex justify-center mt-8">
    //     <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
    //       Save Recipe
    //     </button>
    //   </div>
    // </div>
  );
};

export default ShowRecipes;
