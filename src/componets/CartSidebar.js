import { Button, ListGroup } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShop } from '../store/slices/cartslice';


const CartSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts);
    console.log(carts);
    const navigate = useNavigate();
    const selectProduct = (id)=>{
        handleClose()
        navigate(`/news/${id}`)
    }

    const shop =()=>{
        alert("compra realizada")
        dispatch(getShop())
    }
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ol" numbered>

                        {carts.products?.map((cart) => (
                            <ListGroup.Item as="li" key={cart.id} onClick={()=> selectProduct(cart.id)}>
                                <h5>{cart?.brand}</h5>
                                <h4>{cart.title}</h4>
                                <br />
                                <h6><span>Quantity:    </span>{cart.productsInCart.quantity} </h6>
                                
                                
                                <br /><br />
                                <h6>Preci:      {cart.price}</h6>
                                
                        </ListGroup.Item>))}


                    </ListGroup>

                </Offcanvas.Body>
                <Button onClick={()=>shop()}>Shop</Button>
            </Offcanvas>
        </div>
    );
};

export default CartSidebar;