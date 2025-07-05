import axiosInstance from "../../api/axiosconfig";
import { loadUser } from "../reducers/userSlice";

//register USer
export const asyncRegisterUsers = (user) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("/users", user);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

//login user
export const asyncLoginUsers = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axiosInstance.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem('userToken', JSON.stringify(data[0]));
    console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
};

// logout user
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
   try {
         localStorage.removeItem('userToken');
         console.log('User Logged Out!');
         
   } catch (error) {
    console.error(error);
    
   }
}

//get user details
export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const user = localStorage.getItem('userToken');
        user?dispatch(loadUser(user)):console.log("user not logged in!");
        
    } catch (error) {
        console.error(error);
        
    }
}