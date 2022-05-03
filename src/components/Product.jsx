import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Product from '../pages/Product';
import {showAverage} from '../rating';


const Container = styled.div`






transition: all 1s ease;
position: relative;

cursor:pointer;



&:hover{



border-radius:10px;

transform:scale(1.05);




}







`


const Image = styled.img`

width:200px;

height:200px;

position:relative;

margin:20px;

object-fit: contain;

display:flex;

align-items:center;

justify-content:center;



@media screen and (max-width: 600px){

    
   width:100px;

   height:100px;

   margin:15px;
    

    
    
}

`


const Discount = styled.span`

color: white;

font-weight:900;

padding:4px;


position:absolute;

background-color: #d1411e;



top:0;

right:0;


animation: move 0.5s  infinite alternate;


@keyframes move{

    from {

        opacity:0.0;
        
    }

    to{

        opacity:1;
       
    }
}

`


const InfoContainer= styled.div`

display:flex;

align-items:center;

justify-content:center;

margin-bottom:50px;

flex-direction:column;

`


const Title = styled.h3`

text-align:center;

font-weight:900;

font-size:20px;


@media screen and (max-width: 600px){

    
   
    font-size:15px;  
 
     margin-right:10px;
     
 }

`


const price = styled.span`

text-align:center;

font-weight:bold;

font-size:25px;

font-family:"Cormorant Upright";

`





const product = ({item}) => {





    const caclDiscount = (price1, price2) => {

            if(price1 && price2){



                const discount = ((price1 - price2) / price1) * 100;



                return ` - ${ Math.floor(discount)}%`;
            }else{



                return '';
            }

    }

    return (

    <Container>

            <Link style={{color:'inherit', textDecoration:"none"}} to={`/product/${item._id}`}>


                    
                            

                           

                            <InfoContainer>


                            <Image src={item.img} alt="" />

                            <Title>{item.title}</Title>

                            <price> ksh {item.price}</price>

                            
                            <price style={{textDecoration:"line-through"}}> ksh {item.price} </price>

                            

                            {item && item?.ratings && item?.ratings.length > 0 ? showAverage(item) : ''}




                            
                        </InfoContainer>
                        


                            
                
            
            </Link>


            <Discount>{caclDiscount(600,100)}</Discount>


      </Container>
       

        

       
    )
}

export default product;