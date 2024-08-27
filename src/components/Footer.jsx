import React from "react";
import RecipeLogo from "../assets/RecipeLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={RecipeLogo}
            alt="Logo"
            className="w-8 h-8 mr-3 rounded-full"
          />
          <span className="font-bold">Bikash’s Recipes</span>
        </div>
        {/* Footer right content */}
        <span className="text-sm">
          Copyright © 2024 Bikash Shrestha. All rights reserved.
        </span>
      </footer>
    </>
  );
}
