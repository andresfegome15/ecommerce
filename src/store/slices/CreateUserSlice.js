import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';


export const createUser = createSlice({
    name: 'createUser',
    initialState: "",
    reducers: {

    }
})

export const Usercreate = (user) => (dispatch) => {
    
    dispatch(setIsLoading(true));
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`,user)
        .then(() => {
            dispatch(alert("usuario registrado"))
        })
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
}
export default createUser.reducer;
