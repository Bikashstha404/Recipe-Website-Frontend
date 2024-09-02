import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPageNotFound from "./pages/Error/Error";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import BrowseRecipes from "./pages/BrowseRecipes";
import SimpleForm from "./pages/Classes/SimpleForm";
import AddRecipes from "./pages/AddRecipes";
import EditProfile from "./pages/EditProfile";
import ShowRecipes from "./pages/ShowRecipes";
import BrowseMealPlans from "./pages/BrowseMealPlans";
import ShowMealPlans from "./pages/ShowMealPlans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/browseRecipes",
        element: <BrowseRecipes />,
      },
      {
        path: "/addRecipes",
        element: <AddRecipes />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/showRecipes",
        element: <ShowRecipes />,
      },
      {
        path: "/browseMealPlans",
        element: <BrowseMealPlans />
      },
      {
        path: "/seeMealPlans",
        element: <ShowMealPlans />
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <ErrorPageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPageNotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
