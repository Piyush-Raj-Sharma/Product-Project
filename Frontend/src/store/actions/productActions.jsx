import axiosInstance from "../../api/axiosconfig";
import { loadProducts } from '../reducers/productSlice';

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        await axiosInstance.post('/products', product);
        dispatch(asyncLoadProducts());
        
    } catch (error) {
        console.error(error);
    }
}

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try {
        const {data} = await axiosInstance.get('/products');
        dispatch(loadProducts(data));
        
    } catch (error) {
        console.error(error);
    }
}

export const asyncUpdateProduct = (updatedProduct) => async (dispatch, getState) => {
    try {
        await axiosInstance.patch(`/products/${updatedProduct.id}`, updatedProduct)
        dispatch(asyncLoadProducts());
     } catch (error) {
        console.error(error);
        
    }
}

export const asyncDeleteProduct = (id) => async (dispatch, getState) =>{
    try {
        await axiosInstance.delete(`/products/${id}`)
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.error(error);
        
    }
}