import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { filterCategory } from '../store/slices/News.slice';
import { addTocart } from '../store/slices/cartslice';
import '../styles/ProductsDetail.css'

const NewsProducts = () => {
    const navegate = useNavigate();
    const dispatch = useDispatch()
    const listProducts = useSelector(state => state.newsProducts)
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/`)
            .then(res => {
                const newsproduct = res.data.data.products.find(newsitem => newsitem.id === Number(id))
                setProduct(newsproduct)
                dispatch(filterCategory(product.category?.id))
            })
    }, [dispatch, id, product.category?.id])
console.log(listProducts);
    const addCart = () => {
        const cart = {
            id: id,
            quantity: quantity
        }
        dispatch(addTocart(cart))
    }

    return (
        <div className='Products-detail'>
            <div className='navegate'>
                <a href="/">Home  >></a>
                <label htmlFor=""><b>{product.title}</b></label>
            </div>
            <div className='product-body'>
                <div className='imgProduct'>
                    <div className='divImg'>
                         <img src={product.productImgs?.[2]} alt="" />
                    </div>
                   <div className='otherImg'>
                        <img src={product.productImgs?.[0]} alt="" />
                        <img src={product.productImgs?.[1]} alt="" />
                        <img src={product.productImgs?.[2]} alt="" />
                   </div>
                </div>
                <div className='detailProduct'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h6>preci</h6>
                <h3>{product.price}</h3>
               
                <button className='decrement' onClick={()=>setQuantity(quantity - 1)}>-</button>
                <input id="numero" type="number" min="1" pattern="^[0-9]+"  onChange={e => setQuantity(e.target.value)} value={quantity}></input>
                <button className='increment' onClick={()=>setQuantity(quantity + 1)}>+</button><br />
               
                <Button className='mt-2' onClick={() => addCart()}>Add Cart</Button><br />
                
                
                </div>
                
            </div>
            <div className='some-category'>
                <ul className='container-cards'>
                    {
                        listProducts.map((listproduct) => (
                            <li className='card' key={listproduct.id} onClick={() => navegate(`/news/${listproduct.id}`)} >
                                <img className="card-img-top" src={listproduct.productImgs[0]} alt="" />
                                
                                <h2 className="card-text"> {listproduct.title}</h2>
                                <h4 className="title-price">Price</h4>
                                <div className="container-price-shop">
                                    <h3 className="text-price">${listproduct.price}</h3>
                                    <button className='btnShop' onClick={() => addCart()}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                            </li>
                        ))
                    }</ul>
            </div>


        </div>
    );
};

export default NewsProducts;