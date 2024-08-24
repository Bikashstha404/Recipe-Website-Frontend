import NavBar from '@/components/NavBar';
import { Link, Outlet } from 'react-router-dom';


function Root() {
  return (
    <>
      {/* <NavBar /> */}
      <Link to="/homepage">Go to Homepage</Link>
      <Outlet />
      <br />
      <Link to='/contact'>Go to contact</Link>
      <br />
      <b>this is bold</b>
      <h1>RootFile Works</h1>
    </>
  );
}

export default Root;
