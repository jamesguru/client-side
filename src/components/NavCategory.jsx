
import React from 'react';

import styled from 'styled-components';

import {NavCat} from '../data';
import {Link} from 'react-router-dom';



const Container = styled.div`

height:35px;

cursor:pointer;





margin:0px 30px;

background-color: #0C0C0C;


@media screen and (max-width: 1100px){

    
    margin:0px;

    height:60px;

    padding: 0px 10px;
    

    
    
}






`

const Wrapper = styled.div`

display:flex;

align-items:center;

justify-content:center;


cursor:pointer;


margin:auto;






`

const Cat = styled.span`

display:flex;

align-items:center;

justify-content:center;

padding:7px;
font-size:16px;


margin-right:35px;

color:#DCCA87;

font-weight:900;

cursor: pointer;

transition: all 0.5s ease;


&:hover{

    

    transform:scale(1.1);
}


@media screen and (max-width: 600px){

    
    margin-right:2px;
    font-size:10px;
    padding:5px;
    
    

    
    
}

@media screen and (max-width: 1500px){

    
    margin-right:2px;
    font-size:10px;

    font-weight: bold;

    
    

    
    
}



`









const NavCategory = () => {
    return (
        <Container>

            <Wrapper>



                {NavCat.map((cat) => (

                <Link to={`/products/${cat.cat}`} style={{color:'inherit', textDecoration:'none'}}>

                    
                        <Cat>{cat.title}</Cat>
                
                </Link>
                


                ))}

                
                


            </Wrapper>
            
        </Container>
    )
}

export default NavCategory
