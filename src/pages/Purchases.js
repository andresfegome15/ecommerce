import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavorites } from '../store/slices/favorites.slice';

const Purchases = () => {
    const navegate = useNavigate();
    const purchases = useSelector(state => state.favorites)
    useEffect(()=>{
        console.log(purchases);
    },[purchases])
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFavorites())
    },[dispatch])
    
    return (
        <div className='purchases'>
            <div className="history">
                <button className='btnhome'>Home</button> 
                <button className='btnpurchases'><b>Puerchases</b></button>
            </div>
            <h1 className='title-page'>My Purchases</h1>
              {
                purchases.map((purchase) => (
                    <ul key={purchase.id}>
                        
                        <h4>{Date(purchase.createdAt)}</h4>
                        {purchase.cart.products.map((product)=>(
                            <li key={product.id} onClick={()=>navegate(`/news/${product.id}`)}>
                                <h6>{product.title}</h6>
                                <h6>{product?.productsInCart.quantity}</h6>
                                <h6>{product.price}</h6>
                                
                            </li>
                        ))}
                    </ul>
                ))
            }  
            
            
        </div>
    );
};

export default Purchases;