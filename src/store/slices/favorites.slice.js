import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavorites: (state, action) => {
            return action.payload
        }
    }
})

export const { setFavorites } = favoritesSlice.actions;

export const getFavorites = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, getConfig())
        .then(res => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}
export default favoritesSlice.reducer;
