import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-700 text-gray-200 shadow-md justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "text-gray-300 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "text-gray-300 hover:text-white"
        }
      >
        Product
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "text-gray-300 hover:text-white"
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
