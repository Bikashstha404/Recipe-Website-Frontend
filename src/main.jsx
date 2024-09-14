import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/RootFiles/Root";
import ErrorPageNotFound from "./pages/Error/Error";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import BrowseRecipes from "./pages/RootFiles/BrowseRecipes";
import SimpleForm from "./pages/Classes/SimpleForm";
import AddRecipes from "./pages/RootFiles/AddRecipes";
import EditProfile from "./pages/RootFiles/EditProfile";
import ShowRecipes from "./pages/RootFiles/ShowRecipes";
import BrowseMealPlans from "./pages/RootFiles/BrowseMealPlans";
import ShowMealPlans from "./pages/RootFiles/ShowMealPlans";
import ResetPassword from "./pages/auth/ResetPassword";
import AddMealPlans from "./pages/RootFiles/AddMealPlans";

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
      {
        path: "/addMealPlans",
        element: <AddMealPlans />
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
  {
    path: "/resetPassword",
    element: <ResetPassword />,
    errorElement: <ErrorPageNotFound />,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
