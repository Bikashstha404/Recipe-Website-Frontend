import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./root.css";

function Root() {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    return !!token;
  };

  const authenticated = isAuthenticated();

  useEffect(() => {
    if (!authenticated) {
      console.log('Hello')
      alert("You need to log in and have valid token to access this page.");
      navigate("/login");
    }
  }, [authenticated, navigate]);

  return authenticated ? (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default Root;
