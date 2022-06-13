import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import newsProducts from './slices/News.slice'
import favorites from './slices/favorites.slice'
import carts from './slices/cartslice'
export default configureStore({
    reducer: {
        isLoading,
        newsProducts,
        favorites,
        carts
    }
})
