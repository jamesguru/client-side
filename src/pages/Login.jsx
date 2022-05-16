import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Redirect,Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavCategory from '../components/NavCategory';
import Announcement from '../components/Announcement';



const Container = styled.div`

width: 100vw;

height: 80vh;

margin:20px;
display: flex;

align-items: center;

justify-content: center;





`

const Wrapper = styled.div`

width: 25%;
border-radius:10px;
padding:20px;

background-color: white;

border: 2px solid grey;

@media screen and (max-width: 900px){

    
    
    width: 75%;

    padding:20px;
    

    
    
}


`

const Error = styled.span`

color: red;


`


const Title = styled.h1`

font-size: 24px;

font-weight:900;

`



const Form = styled.form`


display: flex;
flex-direction: column;

`



const Input = styled.input`


flex: 1;

min-width: 40%;

font-size:16px;

margin: 10px 0;

padding: 10px;

border: 1px solid black;

@media screen and (max-width: 900px){

    
    
    width: 75%;

    padding:20px;
    

    
    
}

`
const  Button = styled.button`

width: 40%;

border: none;

padding: 15px 20px;

background-color: #0C0C0C;

color:#DCCA87;

cursor: pointer;

font-weight: 800;

font-size: 20px;

transition: all 1s ease;


&: disabled{

    color: green;

    cursor: not-allowed;
}

&:hover{

    transform: scale(1.1);

    font-size: 20px;


}

`


const LinkTo = styled.a`

margin: 5px 0px;

color: #0C0C0C;
font-size: 15px;
font-weight:bold;

text-decoration: underline;

cursor: pointer;


`

 

const Login = () => {


    const [username, setUsername] = React.useState('');

    const [password, setPassword] = React.useState('');

    const {isFetching,error,currentUser} = useSelector(state => state.user);

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();


    const handleLogin = (e) => {

        e.preventDefault();

        

        login(dispatch, {username,password});


        if(error){


            toast.error('Make sure you have registered', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

                toast.error('username or password is incorrect', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });



        }else{

         toast.success('Login successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });


        }
    }


    console.log(user);


    return (


        <>

        <Announcement />
      
        <Navbar />

        <NavCategory />
            
        <Container>

            

            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

            <Wrapper>

                <Title>LOGIN</Title>

               
                <Form>


                    <Input placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
                    <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    

                   

                    <Button onClick={handleLogin} disabled={isFetching}> 
                    

                           
                            
                                    Login

                   
                        
                     </Button>
                    

                    
                     

                    {user.currentUser ? <Redirect to="/"/> :  "" }


                    <LinkTo>DO NOT REMEMBER PASSWORD?</LinkTo>

                    <LinkTo>
                    
                            <Link style={{color:'inherit', textDecoration:'none'}} to="/register">
                            
                                    CREATE ACCOUNT
                            </Link>
                    
                            
                    
                    
                    </LinkTo>
                </Form>




            </Wrapper>
            
        </Container>

        </>
       
    )
}

export default Login
