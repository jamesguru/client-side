import styled from 'styled-components';

import React from 'react';

import {mobile} from '../responsive';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';




const Container = styled.div`

width: 100vw;

height: 100vh;


display: flex;

align-items: center;

justify-content: center;


background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1)),url("https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg");

background-repeat: no-repeat;

background-position: center; 
background-repeat: no-repeat; 
background-size: cover;


`

const Wrapper = styled.div`

width: 40%;

padding:20px;

background-color: white;




@media screen and (max-width: 900px){

    
    
    width: 75%;

    padding:20px;
    

    
    
}


`


const Title = styled.h1`

font-size: 24px;

font-weight:700;

`



const Form = styled.form`


display: flex;

flex-wrap: wrap;

`



const Input = styled.input`


flex: 1;

min-width: 40%;

font-size:14px;

font-weight:900;

margin: 20px 10px 0px 0px;

padding: 10px;

`

const Agreement = styled.span`

font-size: 12px;

margin: 20px 0px;


`

const  Button = styled.button`

width: 40%;

border: none;

padding: 15px 20px;

background-color: teal;

color: white;

cursor: pointer;


@media screen and (max-width: 900px){

    
    
    padding: 8px 10px;
    

    font-weight:700;
    
}

`





const Register = () => {


    const [username, setUsername] = React.useState("");

    const [password, setPassword] = React.useState("");


    const [email, setEmail] = React.useState("");


    


    const handleClick = async (e) => {


        e.preventDefault();

       


        const user = {'username': username, 'password': password, 'email': email};

        console.log(user);

        await axios.post('http://localhost:4444/api/auth/register', user);


        <Redirect to="/login"/>


        
        



    }


    return (
        <Container>

            <Wrapper>

                <Title>CREATE AN ACCOUNT</Title>

                <Form>


                    
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="confirm password"/>

                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>



                    
                        <Button onClick={handleClick}>


                        
                            
                            <Link to="/login" style={{color:'inherit', textDecoration:'none'}}>
                            
                                    CREATE AN ACCOUNT
                            
                            </Link>
                            
                            
                            
                            
                            
                            
                            </Button>
                    
                   
                    
                </Form>




            </Wrapper>
            
        </Container>
    )
}

export default Register
