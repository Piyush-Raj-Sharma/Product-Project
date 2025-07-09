import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/userActions";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, LogIn, LogOut, PlusCircle } from "lucide-react";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-blue-400">
          🛍️ PiyushStore
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          {user?.isAdmin && (
            <NavLink to="/admin/create-product" className={navLinkClass}>
              <PlusCircle size={16} className="inline mr-1" /> Add Product
            </NavLink>
          )}
          {user && (
            <>
              <NavLink to="/cart" className={navLinkClass}>
                <ShoppingCart size={16} className="inline mr-1" /> Cart
              </NavLink>
              <NavLink to="/orders" className={navLinkClass}>
                <ShoppingCart size={16} className="inline mr-1" /> Orders
              </NavLink>
              <NavLink to="/user-profile" className={navLinkClass}>
                <User size={16} className="inline mr-1" /> Settings
              </NavLink>
              <button
                onClick={logoutHandler}
                className="text-red-400 hover:text-red-300 transition text-sm"
              >
                <LogOut size={16} className="inline mr-1" /> Logout
              </button>
            </>
          )}
          {!user && (
            <NavLink to="/login" className={navLinkClass}>
              <LogIn size={16} className="inline mr-1" /> Login
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-gray-900 border-t border-white/10 flex flex-col gap-4 text-sm">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          {user?.isAdmin && (
            <NavLink to="/admin/create-product" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <PlusCircle size={16} className="inline mr-1" /> Create Product
            </NavLink>
          )}
          {user && (
            <>
              <NavLink to="/cart" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                <ShoppingCart size={16} className="inline mr-1" /> Cart
              </NavLink>
              <NavLink to="/user-profile" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                <User size={16} className="inline mr-1" /> Settings
              </NavLink>
              <button
                onClick={() => {
                  logoutHandler();
                  setMenuOpen(false);
                }}
                className="text-red-400 hover:text-red-300 transition text-left"
              >
                <LogOut size={16} className="inline mr-1" /> Logout
              </button>
            </>
          )}
          {!user && (
            <NavLink to="/login" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <LogIn size={16} className="inline mr-1" /> Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
