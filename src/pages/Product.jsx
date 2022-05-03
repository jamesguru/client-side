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

height: 50vh;

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

font-weight: 100;

font-size: 30px;

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

font-weight:bold;

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

    const [area,setArea] = React.useState("");

    const [phone,setPhone] = React.useState("");

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

            dispatch(addProduct({...product, color, size, quantity,area,phone}));

    }


    useEffect(() => {



        const getRelatedProducts = async () => {

                try {
                    

                    const res = await axios.get("http://localhost:4444/api/products/related/" + id);


                    setRelatedProducts(res.data);
                } catch (error) {


                    console.log('error');
                    
                }


        }

        getRelatedProducts();



    },[])

 
   
   
       
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

                    

                     <Price>ksh {product.price}</Price>

                     

                     
                    

                    <FilterContainer>

                        <Filter>



                            <FilterTitle>Color</FilterTitle>


                           

                           {product.color?.map((c) => (<FilterColor color={c} key={c} onClick={() => setColor(c)}/>))}
                            

                        </Filter>

                        
                       

                        <Filter>

                            <FilterTitle>Size</FilterTitle>

                            <FilterSize onChange={(e) => setSize(e.target.value)}>



                               
                                {product.size?.map((s) => (<FilterSizeOption key={s} >{s}</FilterSizeOption>))}
                            
                           
                                
                            </FilterSize>
                        </Filter>
                    </FilterContainer>





                   

                    <AddContainer>
                        <AmountController>


                           

                            <Remove onClick = { () => handleQuantity("dec")} style={{backgroundColor:"#FF7BA9", color:"white"}}/>

                            <Amount>{quantity}</Amount>
                            <Add onClick = { () => handleQuantity("inc")} style={{backgroundColor:"#FF7BA9", color:"white"}}/>
                        </AmountController>
                        <Button onClick={handleClick}>add to Basket</Button>


                    </AddContainer>



                   

                   


                    <DescVideo 
                    src="https://firebasestorage.googleapis.com/v0/b/shop-web-6eba5.appspot.com/o/1646915289683Criminal%20Minds%20Trailer%20(1).mp4?alt=media&token=14c5a02e-736a-4a28-b3ad-291da238bdae" 

                    


                    loop

                    muted

                    

                    controls
                    />



                   


                    
                </InfoContainer>
            </Wrapper>

            <Comment>

                    <Title style={{marginTop:'30px'}}>Reviews</Title>



                    {product.ratings?.length ? product.ratings?.slice(0,4).map((rating,index) => <Rating>

                    <StarRating key={index} starDimension="20px" starRatedColor="#d1411e" starSpacing="2px" editing={false} rating={rating.star}/>

                    <Desc key={index}><strong>{rating.name}</strong>: {rating.comment}</Desc>

                    </Rating>): <span>No ratings</span>}




        </Comment>


        


        <RelatedProduct products={relatedProducts}/>
            


            <Brands />

           

            
            <Newsletter />

            <Footer />
            
        </Container>
    )
}

export default Product;
