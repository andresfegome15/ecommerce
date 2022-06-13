import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { getFavorites } from './favorites.slice';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        setCart:(state, action) => {
           return action.payload
        }
    }
})

export const { setCart } = cartSlice.actions;
export const getcarts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
        .then(res => dispatch(setCart(res.data.data.cart)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addTocart = (cart) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, cart, getConfig() )
        .then(() => {
            dispatch(getcarts())
            alert("se añadió producto")
        })
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getShop = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, {}, getConfig())
        .then(() => {
            dispatch(getFavorites())
            dispatch(setCart([]))
        })
        .catch(error => console.log((error.response)))
        .finally(() => dispatch(setIsLoading(false)));
}
export default cartSlice.reducer;
