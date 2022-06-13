import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const newSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts:(state, action) =>{
            return action.payload
        }
    }
})

export const { setProducts } = newSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterquery = (search) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${search}`)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategory = (categoryID) => (dispatch) => {
    console.log(categoryID);
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryID}`)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default newSlice.reducer;
