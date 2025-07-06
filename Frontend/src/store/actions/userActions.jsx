import { toast } from "react-toastify";
import axiosInstance from "../../api/axiosconfig";
import { loadUser, removeUser } from "../reducers/userSlice";

//register User
export const asyncRegisterUsers = (user) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/users", user);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

//login user
export const asyncLoginUsers = (user) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length === 0) {
      toast.error("Invalid email or password");
      return false;
    }

    const loggedUser = data[0];
    localStorage.setItem("userToken", JSON.stringify(loggedUser));
    dispatch(loadUser(loggedUser));
    toast.success(`Welcome ${loggedUser.username}`);
    return true;
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
    return false;
  }
};

// logout user
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("userToken");
    dispatch(removeUser());
    toast.success("User Logged Out!");
  } catch (error) {
    console.error(error);
  }
};

//get user details
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = localStorage.getItem("userToken");
    user
      ? dispatch(loadUser(JSON.parse(user)))
      : console.log("user not logged in!");
  } catch (error) {
    console.error(error);
  }
};

//update user profile
export const asyncUpdateUser = (updatedUser) => async (dispatch, getState) => {
  try {
    const user = getState().userReducer.userData;
    const { data } = await axiosInstance.patch(
      `/users/${user.id}`,
      updatedUser
    );
    toast.success("Profile updated successfully");
    localStorage.setItem("userToken", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong, while updating user details");
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axiosInstance.delete(`/users/${id}`);
    toast.success("Account deleted successfully");
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.error(error);
    toast.error("Error deleting user:", error)
  }
}
