import axiosInstance from '../../api/axiosconfig'
import { loadUser } from './userSlice';

export const asyncGetUsers = () =>  async (dispatch, getState) => {
    try {
        const res = await axiosInstance.get('/users');
        dispatch(loadUser(res.data));
        console.log("current state ->>>>>", getState());
        
        
    } catch (error) {
        console.error(error);
    }
}