import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts, filterquery, filterCategory } from '../store/slices/News.slice';

const Home = () => {
    const navegate = useNavigate()
    const [search, setSearch] = useState("")
    const [categoty, setCategory] = useState([])
    const Products = useSelector(state => state.newsProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => setCategory(res.data.data.categories))
    }, [dispatch])


    const filterProducts = (() => {
        dispatch(filterquery(search))
    })

    const selectCategorie = ((id) => {
        dispatch(filterCategory(id))
    })


    return (
        <section className="main">
            <label className='checkedFilter' htmlFor="filter">
                <i className="fa-solid fa-filter"></i> Filter
            </label>
            <input type="checkbox" id="filter" />
            <div className="left">
                <input type="checkbox" id="checkePrice"></input>
                <label htmlFor="checkePrice" className="lblprice labelslice ">Price
                    <i className="fa-solid-price fa-solid fa-angle-down"></i>
                </label>
                <form className="div-price">
                    <label htmlFor="from">From</label>
                    <input id="from" />
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" />
                    <button className="btn-filter-price">Filter</button>
                </form>


                <input type="checkbox" id="checkedCategory" />
                <label htmlFor="checkedCategory" className="lblcategory labelslice">Category
                    <i className="fa-solid fa-angle-down"></i></label>
                <div className="div-categories">
                    <ul className="list-group" >
                        {
                            categoty.map((categorie) => (
                                <li key={categorie.id} className="list-group-item" onClick={() => selectCategorie(categorie.id)}>
                                    {categorie.name}
                                </li>
                            ))
                        }</ul>
                </div>

            </div>
            <div className="rigth">
                <form className="div-search">
                    <input onChange={e => setSearch(e.target.value)} value={search}
                        type="text" className="form-control" placeholder="Search"
                        aria-label="Recipient's username with two button addons" />
                    <button className="btn-search" type="button" onClick={() => filterProducts()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>


                
                <div className="container-cards">
                    {
                        Products.map((product) => (
                            <div key={product.id} className="card" onClick={() => navegate(`/news/${product.id}`)} >
                                <img className="card-img-top" src={product.productImgs[2]} alt="" />
                                
                                <h2 className="card-text"> {product.title}</h2>
                                <h4 className="title-price">Price</h4>
                                <div className="container-price-shop">
                                    <h3 className="text-price">${product.price}</h3>
                                    <button className='btnShop'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                                
                            </div>
                        ))
                    }
                    
                   
                </div>

            </div>
        </section>
    );
};

export default Home;