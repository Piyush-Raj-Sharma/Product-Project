import axiosInstance from "../../api/axiosconfig";

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
         localStorage.setItem('userToken', "");
   } catch (error) {
    console.error(error);
    
   }
}
