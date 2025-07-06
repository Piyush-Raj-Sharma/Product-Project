import axiosInstance from "../../api/axiosconfig";
import { loadProducts } from '../reducers/productSlice';

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axiosInstance.post('/products', product);
        dispatch(loadProducts(data)); //sending the current product data to loadProduct/reducer which will we sent to store
        // console.log(res);
        
    } catch (error) {
        console.error(error);
    }
}

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try {
        const {data} = await axiosInstance.get('/products');
        dispatch(loadProducts(data));
        // console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}