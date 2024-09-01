import React from "react";
import burgerImage from "../assets/Burger.jpeg"; // Make sure the path to your image is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faS,
  faPaperPlane,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
const ShowRecipes = () => {
  return (
    <div className="flex flex-col flex-grow bg-white p-5  w-full max-w-7xl">
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
      <div className="flex space-x-10 mb-5">
        <div>
          <p className="font-semibold">Prep Time:</p>
          <p>15 minutes</p>
        </div>
        <div>
          <p className="font-semibold">Calories:</p>
          <p>500</p>
        </div>
        <div className="flex items-center mt-5" style={{ marginLeft: "auto" }}>
          <p className="text-lg font-semibold mr-2">404 Ratings</p>
          <div className="flex text-yellow-400">★★★★☆</div>
        </div>
      </div>
      <div className="flex space-x-10">
        <div>
          <p className="font-semibold">Calories:</p>
          <p>500</p>
        </div>
        <div>
          <p className="font-semibold">Sub-Category:</p>
          <p>Entrees, Sandwich</p>
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
            <li>1 lb ground beef</li>
            <li>Salt and black pepper</li>
            <li>4 slices cheddar cheese (optional)</li>
            <li>1 large onion, thinly sliced and caramelized</li>
            <li>4 leaves fresh lettuce</li>
            <li>4 burger buns, toasted</li>
          </ul>
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-xl font-bold mb-2">Preparation:</h2>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-semibold">Step 1:</span> Form the ground
              beef into 4 equal patties. Season both sides with salt and black
              pepper.
            </li>
            <li>
              <span className="font-semibold">Step 2:</span> Preheat the grill
              to medium-high heat. Grill the patties for about 4-5 minutes on
              each side, or until they reach your desired level of doneness. If
              using, place a slice of cheddar cheese on each patty during the
              last minute of grilling.
            </li>
          </ol>
        </div>
      </div>
      <div className="flex mt-5">
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Save Recipe
        </button>
      </div>
    </div>

    //   {/* Recipe Details */}

    //   {/* Ratings and Feedback */}

    //   {/* Ingredients and Preparation */}

    //     {/* Preparation */}

    //   </div>

    //   {/* Save Recipe Button */}

    // </div>
  );
};

export default ShowRecipes;
