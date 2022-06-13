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
                                <h3>{cart?.brand}</h3>
                                <button>X</button><br /><br />
                                <h4>{cart.title}</h4>
                                <br /><br />
                                <h4>{cart.price}</h4>
                                
                        </ListGroup.Item>))}


                    </ListGroup>

                </Offcanvas.Body>
                <Button onClick={()=>shop()}>Shop</Button>
            </Offcanvas>
        </div>
    );
};

export default CartSidebar;