import {React,useEffect} from 'react';
import styled from 'styled-components';



import Product from './Product';
import { publicRequest } from '../requestMethods';
import Loader from 'react-spinners/BounceLoader';
import axios from 'axios';

const Wrapper = styled.div`


display:flex;

flex-direction:column;

justify-content:space-between;


margin: 0px 20px;


`



const Container = styled.div`


display: flex;

padding: 10px;


flex-wrap: wrap;

margin: 30px;


@media screen and (max-width: 600px){

    margin: 10px;
   
 
  
     
 
     
     
 }



`









const CatBody = () => {


    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    



    const cat = 'face';



    useEffect(() =>{


        setLoading(true);


        const getProducts = async() => {



            try {

                    const res = await axios.get("http://localhost:4444/api/products");

                    setProducts(res.data);
                
            } catch (error) {


                
            }
        }


        getProducts();

        setLoading(false);

    },[cat])


console.log(products);

    return (

        <Wrapper>


            <Container>

            { cat && products.length && products?.map((item,index) => (<Product item={item} key={index}/>))};
            </Container>


            {loading && <Loader />}

        </Wrapper>
        
    )
}

export default CatBody
