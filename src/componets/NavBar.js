import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getcarts } from '../store/slices/cartslice';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const NavBar = () => {
    const token = localStorage.getItem("token");
    const navegate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (token) {
            setShow(true)
        } else {
            navegate("/login")
        }

    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcarts())
    }, [dispatch])

    const logOut = (() => {
        localStorage.setItem("token", "")
        navegate("/")
    })

    return (
        <header>
            <nav>
                <div className='div-logo'>
                    <a href="/">
                        <strong>e-commerce</strong>
                    </a>
                </div>
                <div className='div-enlaces'>
                    {
                        token === "" ? <button className="icon">
                            <a href='/#/login'>
                                <i className="fa-solid fa-user"></i>
                            </a>
                        </button> : <button className="icon" onClick={() => logOut()}>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    }

                    <button className="icon">
                        <a href="/#/purchases">
                            <i className="fa-solid fa-box-archive"></i>
                        </a>

                    </button>
                    <button className="icon">
                        <button  onClick={handleShow}>
                            <i className="fa-brands fa-shopify"></i>
                        </button>

                    </button>

                </div>
            </nav>
            <CartSidebar show={show} handleClose={handleClose} />
        </header>
    );
};

export default NavBar;