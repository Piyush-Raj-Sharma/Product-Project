import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const user = useSelector((state) => state.userReducer.userData);
  return user ? children : <Navigate to="/login" replace />;
  // Use 'replace' to prevent logged-in users from going back to login/register using the browser's back button
};

export default AuthWrapper;
