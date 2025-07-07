import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestWrapper = ({ children }) => {
  const user = useSelector((state) => state.userReducer.userData);

  if (user) {
    return <Navigate to="/user-profile" replace />;
    // Use 'replace' to prevent logged-in users from going back to login/register using the browser's back button
  }
  return children;
};

export default GuestWrapper;
