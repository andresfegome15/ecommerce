import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux/es/exports';
import { Usercreate } from '../store/slices/CreateUserSlice';
import { useForm } from 'react-hook-form';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = data => {
        dispatch(Usercreate(data))
    }

    return (
        <div className='register'>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" >
                        FirstName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control {...register("firstName")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" >
                        LastName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control {...register("lastName")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" >
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control {...register("email")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" {...register("password")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" >
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control {...register("phone")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" >
                        role
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control {...register("role")} />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col column sm="2"></Col>
                    <Col sm="10">
                        <Button type='submit'>Register</Button>
                    </Col>
                </Form.Group>
            </Form>

        </div>
    );
};

export default Register;