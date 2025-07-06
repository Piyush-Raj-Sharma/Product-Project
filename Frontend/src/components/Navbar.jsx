import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

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

      {/* <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "text-gray-300 hover:text-white"
        }
      >
        Product
      </NavLink> */}

      {user ? (
        <>
          {user?.isAdmin ? (
            <>
              <NavLink
                to="/admin/create-product"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }
              >
                Create Product
              </NavLink>
              <NavLink
                to="user-profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }
              >
                Settings
              </NavLink>
            </>
          ) : (
            <NavLink
              to="user-profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Settings
            </NavLink>
            // <button onClick={logoutHandler}>Logout</button>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
