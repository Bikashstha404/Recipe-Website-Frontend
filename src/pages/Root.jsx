import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet /> {/* This renders the child routes */}
        </main>
        <footer>
          <p>&copy; 2024 Recipe Management System</p>
        </footer>
      </div>
    </>
  );
}

export default Root;
