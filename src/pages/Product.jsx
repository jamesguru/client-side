import React,{useEffect} from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Remove, Add } from '@material-ui/icons';
import {mobile} from '../responsive';
import {useLocation, Prompt} from 'react-router-dom';
import {publicRequest} from '../requestMethods';

import {useDispatch} from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { Select } from '@material-ui/core';
import axios from 'axios';
import Brands from '../components/Brands';
import Gallery from '../components/Gallery';
import {showAverage} from '../rating';

import RelatedProduct from '../components/RelatedProduct';

import StarRating from 'react-star-ratings';
import NavCategory from '../components/NavCategory';

const Container = styled.div`




`




const Wrapper = styled.div`

display: flex;

padding: 50px;

@media screen and (max-width: 900px){


        display: flex;
    
        flex-direction: column;

        align-items:center;

        margin:10px;

        justify-content:center;
    }
`

const ImgContainer = styled.div`

flex: 1;


`

const Image = styled.img`



width: 100%;

height: 70vh;

object-fit: contain;

${mobile({height: "40vh"})}


@media screen and (max-width: 900px){

    
    height: 40vh;
    
 

  
  
      
  }

`

const InfoContainer = styled.div`

flex: 1;

padding: 0px 50px;
${mobile({padding: "10px"})}


@media screen and (max-width: 900px){

    
  
 

  
    padding: "10px"
      
  }

`

const Title = styled.h2`

font-weight: 200px;

font-family:"Cormorant Upright";

margin:20px;

@media screen and (max-width: 1200px){

    
  
 

  
    margin-left: 40px;
      
  }

`

const Desc = styled.p`

margin: 20px 20px;

@media screen and (max-width: 1200px){

    
  
 

  
    margin-left: 40px;
      
  }


`


const Discount = styled.span`

color: #d1411e;

position:absolute;

top:0;

right:0;

`

const Price = styled.span`

font-weight: 900;

font-size: 25px;

margin:20px;

@media screen and (max-width: 1200px){

    
  
    font-size: 20px;

  
    margin-left: 40px;
      
  }

`

const FilterContainer = styled.div`


width: 50%;

margin: 20px 0px;

display: flex;

justify-content: space-between;

${mobile({width: "100%"})}

@media screen and (max-width: 900px){

    
  
 
    width: "100%"
  
    
      
  }



@media screen and (max-width: 600px){

    width: 90%;

    margin: 50px 10px;
    
    display: flex;
    
    justify-content: space-between;  
 

  
  
      
  }

`

const Filter = styled.div`


display: flex;

align-items: center;

@media screen and (max-width: 600px){

    
    
    margin:20px;
 

  
  
      
  }




`

const FilterTitle = styled.span`

font-size : 20px;

font-weight: 200px;

`

const FilterColor = styled.div`

width: 30px;

height:30px;

border-radius: 50%;

background-color: ${props => props.color};

margin: 0px 5px;

cursor: pointer;

`

const FilterSize=styled.select`

margin-left: 10px;

padding: 5px;

`

const FilterSizeOption= styled.option``


const AddContainer = styled.div`

display: flex;

width: 50%;

align-items: center;

justify-content: space-between;

${mobile({width: "100%"})};


@media screen and (max-width: 600px){

   

   display:flex;

   justify-content:center;

   align-items:center;

   width:90%;

   


    
}



`

const AmountController = styled.div`

display: flex;

align-items: center;

font-weight: 700;

`

const Amount = styled.span`

width: 30px;

height:30px;

border-radius: 10px;



display: flex;

align-items: center;

justify-content: center;

margin: 0px 5px;


@media screen and (max-width: 600px){

   

    margin:10px;
 
 
     
 }



`



const DescVideo = styled.video`

margin-top: 100px;

margin-left: 30px;

height: 400px;

width: 600px;


@media screen and (max-width: 600px){

    margin-top: 50px;
   display:flex;

   justify-content:center;

   align-items:center;

   height: 350px;

    width: 350px;


    
}



`

const Button= styled.button`

padding: 5px;

font-size:20px;

font-weight:900;

border: none;

color: white;

background-color: #FF7BA9;

cursor: pointer;

font-weight: 500;

transition: all 1s ease;


@media screen and (max-width: 600px){

   font-size:17px;

   margin-left:30px;

  
 
 
     
 }




`


const Comment = styled.div`

display:flex;

align-items:center;

width:100%;

justify-content:center;

flex-direction: column;

font-size:18px;


`


const Wholesale = styled.div`


color:#DCCA87;

background-color: #0C0C0C;

font-weight:900;

font-size: 18px;

margin:20px;

padding:10px;


@media screen and (max-width: 600px){

    font-size:12px;

    font-weight:900;
 
    
 
   
  
  
      
  }

`

const WholesaleText = styled.span`

display:block;



animation: progress 0.5s ease alternate infinite;


@keyframes progress{


    from{

        transform:scale(0.95);

    }

    to{

        transform:scale(1.0);
    }
}


`

const Rating = styled.div`

display:flex;

align-items:center;

justify-content:center;

@media screen and (max-width: 600px){

    font-size:12px;
 
    margin-left:10px;

    text-align:center;
 
   
  
  
      
  }


`





const Product = () => {


    const location = useLocation();

    const id = location.pathname.split("/")[2];


    const [product, setproduct] = React.useState({});
    const [relatedProducts, setRelatedProducts] = React.useState([]);

    const [comments, setComments] = React.useState([]);

    const [quantity, setQuantity] = React.useState(1);
    
    const [color, setColor] = React.useState("");

    const [size, setSize] = React.useState("");

    let price;

    
    const dispatch = useDispatch();

    const handleQuantity = (action) => {


        if(action === "dec"){


           

                setQuantity(quantity == 0 ? 0 : quantity -1)

        }

        if(action === "inc"){

            setQuantity(quantity + 1)

        }
    }


    useEffect(() =>{


        const getProduct = async() => {


           try {

            const res = await publicRequest.get("/products/find/" + id);


            setproduct(res.data);


               
           } catch (error) {
               
           }
        }

        getProduct();

    },[id])


    useEffect(() =>{

        const getComment = async() => {


            try {

                const res = await axios.get("http://localhost:4444/api/comments/find/" + id);

                
                setComments(res.data);
            } catch (error) {

                console.log(error);
                
            }
        }


        getComment();


    },[id])


    
    
    const handleClick = () => {

            dispatch(addProduct({...product, color, size, quantity,price}));

            console.log(product);

    }


    


   


    const handlePrice = (originalPrice, discountedPrice, wholePrice, minimumQuantity,quantity) => {


        if(quantity > minimumQuantity && discountedPrice) {

                discountedPrice = wholePrice;

                price = discountedPrice;

                return price;

        }else if(quantity > minimumQuantity && originalPrice){


            originalPrice = wholePrice;

            price = originalPrice;


            return price;


        }else if(discountedPrice) {



            price = discountedPrice;



            return price;


        }else{


            price = originalPrice;


            return price;
        }



    }

 
   
   
       
    return (
        <Container>

            <Announcement />
            <Navbar />
            <NavCategory />

            <Wrapper>

                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>

                    
                    <Desc>

                        {product.desc}
                    </Desc>

                        

                    <Desc style={{color:'green',fontSize:'20px', fontWeight:'700'}}>

                        {product.inStock ? "in stock" : "not instock"}
                    </Desc>


                    

                    {product && product?.ratings && product?.ratings.length > 0 ? showAverage(product) : <span style={{display:'block',margin:'auto', fontWeight:'bold'}}>no ratings yet</span>}

                    

                    


                    <Price> ksh {handlePrice(product.originalPrice,product.discountedPrice,product.wholesalePrice,product.wholesaleMinimumQuantity, quantity)}</Price>

                     

                     
                    

                    <FilterContainer>

                        <Filter>


                      
                        <FilterTitle>Concern</FilterTitle>

                            <FilterSize onChange={(e) => setSize(e.target.value)}>



                            
                                {product.concern?.map((s) => (<FilterSizeOption key={s} >{s}</FilterSizeOption>))}


                                
                            </FilterSize>

                       

                        </Filter>

                        
                       

                        <Filter>


                            

                            <FilterTitle>Skin type</FilterTitle>

                            <FilterSize onChange={(e) => setSize(e.target.value)}>



                               
                                {product.skintype?.map((s) => (<FilterSizeOption key={s} >{s}</FilterSizeOption>))}
                            
                           
                                
                            </FilterSize>


                         
                        </Filter>
                    </FilterContainer>





                   

                    <AddContainer>
                        <AmountController>


                           

                            <Remove onClick = { () => handleQuantity("dec")} style={{backgroundColor:"#FF7BA9", color:"white", cursor:"pointer",fontSize:"20px"}}/>

                            <Amount>{quantity}</Amount>
                            <Add onClick = { () => handleQuantity("inc")} style={{backgroundColor:"#FF7BA9", color:"white", cursor:"pointer",fontSize:"20px"}}/>
                        </AmountController>
                        <Button onClick={handleClick}>add to Basket</Button>


                    </AddContainer>





                    {product.wholesalePrice && product.wholesaleMinimumQuantity && product.wholesaleSeller &&(


                        <Wholesale > 
                         <WholesaleText> Wholesale</WholesaleText>                

                    <WholesaleText>For items more than {product.wholesaleMinimumQuantity} items you get the whole price of ksh {product.wholesalePrice} per item.</WholesaleText>

                    <WholesaleText> Wholeseller: {product.wholesaleSeller}</WholesaleText>

                    




                        </Wholesale>



                    )}

                   
                   

                   

                    

                    {product.video && 
                    
                    <DescVideo 
                    src={product.video}

                    


                    loop

                    muted

                    

                    controls
                    />}



                    



                   


                    
                </InfoContainer>
            </Wrapper>

            <Comment>

                    <Title style={{marginTop:'30px'}}>Reviews</Title>



                    {product.ratings?.length ? product.ratings?.slice(0,4).map((rating,index) => <Rating>

                    <StarRating key={index} starDimension="20px" starRatedColor="#d1411e" starSpacing="2px" editing={false} rating={rating.star}/>

                    <Desc key={index}><strong>{rating.name}</strong>: {rating.comment}</Desc>

                    </Rating>): <span>No ratings</span>}




        </Comment>


        


       
            


            <Brands />

           

            
            <Newsletter />

            <Footer />
            
        </Container>
    )
}

export default Product;
