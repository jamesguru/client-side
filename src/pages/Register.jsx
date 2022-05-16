import styled from 'styled-components';

import React from 'react';

import {mobile} from '../responsive';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NavCategory from '../components/NavCategory';




const Container = styled.div`

width: 100vw;

height:80vh;

margin:20px;


display: flex;

align-items: center;

justify-content: center;




`

const Wrapper = styled.div`

width: 40%;

padding:20px;

background-color: white;

border: 2px solid grey;

border-radius:10px;


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

font-size:18px;

font-weight:900;

margin: 20px 10px 0px 0px;

padding: 10px;


@media screen and (max-width: 900px){

    
    padding: 5px;
    font-size:10px;
    
}

`

const Agreement = styled.span`

font-size: 12px;

margin: 20px 0px;


`

const  Button = styled.button`

width: 40%;

border: none;

padding: 15px 20px;

background-color: #0C0C0C;

color:#DCCA87;

font-weight:900;

cursor: pointer;


@media screen and (max-width: 900px){

    
    
    padding: 8px 10px;
    
    width: 100%;
    font-weight:700;
    
}

`





const Register = () => {


    const [username, setUsername] = React.useState("");

    const [password, setPassword] = React.useState("");


    const [email, setEmail] = React.useState("");


    


    const handleClick = async (e) => {


        e.preventDefault();

       
        try {


        const user = {'username': username, 'password': password, 'email': email};

        console.log(user);

        user && await publicRequest.post('/auth/register', user);


        <Redirect to="/login"/>
            
        } catch (error) {
            





        }

        


        
        



    }


    return (


        <>


        <Announcement />

        <Navbar />

        <NavCategory />
        <Container>

            <Wrapper>

                <Title>CREATE AN ACCOUNT</Title>

                <Form>


                    
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input type="password" placeholder="confirm password"/>

                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>



                    
                        <Button onClick={handleClick}>


                        
                            
                            <Link to="/login" style={{color:'inherit', textDecoration:'none'}}>
                            
                                    CREATE AN ACCOUNT
                            
                            </Link>
                            
                            
                            
                            
                            
                            
                            </Button>
                    
                   
                    
                </Form>




            </Wrapper>
            
        </Container>

        </>
    )
}

export default Register
