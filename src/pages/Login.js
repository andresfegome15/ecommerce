
import axios from 'axios';

import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navegate = useNavigate();
    const { register, handleSubmit } = useForm();
    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then(res => {
                console.log(res.data.data.token)
                localStorage.setItem("token", res.data.data.token)
                navegate("/")
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert("usuario no valido")
                }
            })

    }
    return (

        <div className='login'>
            <h3 className='title-welcome'>Welcome! Enter your email and password to continue</h3>
            <div className="welcome">
                <h4><b>Test Data</b></h4>
                <h6>
                    <i class="fa-solid fa-envelope"></i>   andresgon15@academlo.com
                </h6>
                <h6>
                    <i class="fa-solid fa-unlock-keyhole"></i>   andres1234
                </h6>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="">Email</label>
                <input {...register("email")} type="text" placeholder='User' />
                <label htmlFor="">Password</label>
                <input {...register("password")} type="password" placeholder='********' />
                <Button type='submit' className='mt-1'>Ingresar</Button>
            </form>
            <p>Don't have an account? <a href="/#/register">Sign up</a> </p>
                

        </div>
    );
};

export default Login;