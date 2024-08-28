import { Link, Outlet } from "react-router-dom";
import BrowseRecipes from "./BrowseRecipes";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import './root.css'
function Root() {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow overflow-auto ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
