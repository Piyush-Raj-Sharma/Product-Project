import axiosInstance from '../../api/axiosconfig'


export const asyncRegisterUsers = (user) =>  async (dispatch, getState) => {
    try {
        const res = await axiosInstance.post('/users', user);
        console.log(res);
        

    } catch (error) {
        console.error(error);
    }
}