import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncLogoutUser,
  asyncDeleteUser,
} from "../../store/actions/userActions"; // make sure asyncDeleteUser exists
import instanceIP from "../../api/axiosIp";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.userData);
  const [ip, setIp] = useState("Fetching...");

  useEffect(() => {
    const getPublicIP = async () => {
      try {
        const response = await instanceIP.get();
        setIp(response.data.ip);
      } catch (error) {
        console.error("Failed to get IP:", error);
        setIp("Unavailable");
      }
    };

    getPublicIP();
  }, []);

  if (!user) return null;

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  const deleteAccountHandler = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action is irreversible."
      )
    ) {
      dispatch(asyncDeleteUser(user.id));
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center px-4 py-10">
      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 w-full max-w-md p-8 text-white transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1">
        {/* Decorative Ring */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 p-1 rounded-full shadow-xl">
          <div className="relative group transition-transform duration-300">
            <img
              src={
                user.userImage ||
                "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
              }
              alt="User"
              className="w-24 h-24 rounded-full object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute -bottom-2 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-16 text-center space-y-2">
          <h2 className="text-2xl font-bold text-blue-400 tracking-tight">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-sm text-slate-300">@{user.username}</p>
          <p className="text-sm text-slate-400">{user.email}</p>

          {/* Role Badge */}
          <span
            className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
              user.isAdmin
                ? "bg-yellow-500 text-black"
                : "bg-green-600 text-white"
            }`}
          >
            {user.isAdmin ? "Admin" : "User"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-md mx-auto">
          {/* Edit Profile */}
          <button
            onClick={() => navigate("/edit-profile")}
            className="flex items-center justify-center gap-2 flex-1 min-w-[130px] bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-xl font-semibold text-sm text-white transition duration-200 shadow-md active:scale-95"
          >
            ✏️ <span>Edit Profile</span>
          </button>

          {/* Logout */}
          <button
            onClick={logoutHandler}
            className="flex items-center justify-center gap-2 flex-1 min-w-[130px] bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-xl font-semibold text-sm text-white transition duration-200 shadow-md active:scale-95"
          >
            🔒 <span>Logout</span>
          </button>

          {/* Delete Account */}
          <button
            onClick={deleteAccountHandler}
            className="flex items-center justify-center gap-2 flex-1 min-w-[130px] bg-red-800 hover:bg-red-900 px-6 py-3 rounded-xl font-semibold text-sm text-white transition duration-200 shadow-md active:scale-95 border-2 border-red-700"
            title="Delete Account"
          >
            🗑️ <span>Delete Account</span>
          </button>
        </div>

        {/* Footer Line */}
        <div className="mt-6 border-t border-slate-600 pt-4 text-center text-xs text-slate-400">
          Last login device · IP: {ip}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
