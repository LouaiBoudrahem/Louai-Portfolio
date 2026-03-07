import { NavLink, useLocation } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className='header'>
      <NavLink to='/'>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        {!isHomePage && (
          <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
            Home
          </NavLink>
        )}
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
