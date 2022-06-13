import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { filterCategory } from '../store/slices/News.slice';
import { addTocart } from '../store/slices/cartslice';


const NewsProducts = () => {
    const navegate = useNavigate();
    const dispatch = useDispatch()
    const listProducts = useSelector(state => state.newsProducts)
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const [quantity, setQuantity] = useState("")

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/`)
            .then(res => {
                 const newsproduct = res.data.data.products.find(newsitem=> newsitem.id ===Number(id))
                 setProduct(newsproduct)
                 dispatch(filterCategory(product.category?.id))
            })
    }, [dispatch, id,product.category?.id])

    const addCart = ()=>{
        const cart ={
            id: id,
            quantity: quantity
        }
        dispatch(addTocart(cart))
    }
    
    return (
        <div>
            <h1>product Detail</h1>
            <h2>{product.title}</h2>
            <input type="Number" placeholder='Quantity' onChange={e => setQuantity(e.target.value)} value={quantity}></input>
            <Button onClick={()=>addCart()}>Add Cart</Button><br />
            <img src={product.productImgs?.[2]} alt="" />
            <h3>{product.price}</h3>
            <ul>
            {
                listProducts.map((listproduct) => (
                    <li key={listProducts.id} onClick={() => navegate(`/news/${listproduct.id}`)} >
                        {listproduct.title}
                    </li>
                ))
            }</ul>
        </div>
    );
};

export default NewsProducts;