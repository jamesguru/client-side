import React from 'react';

import styled from 'styled-components';


import {ArrowForward} from '@material-ui/icons';

import {Link} from 'react-router-dom';



const Container = styled.div`



margin:30px 30px;

background-color: #0C0C0C;


display:flex;

align-items:center;

justify-content:space-between;

padding:3px;
color:#DCCA87;

width: 30%;


`



const Title = styled.span`

display:flex;

align-items:center;

justify-content:start;


font-size:25px;


margin-left:35px;



font-weight:900;




`


const Navigate = styled.div`

display:flex;

align-items:center;


cursor:pointer;

`

const Text = styled.span`


font-weight:bold;

margin:10px;


`





const CatHeader = ({title}) => {
    return (
        <Container>

            <Title>{title} products in our store</Title>


            <Link style={{textDecoration:"none",color:"inherit"}}  to={`/products/${title.toLowerCase()}`} >
            
                <Navigate>


                <Text>See more</Text>


                <ArrowForward />


                </Navigate>
            
            
            
            </Link>
            
            
            
        </Container>
    )
}

export default CatHeader
