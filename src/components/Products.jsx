
import styled from 'styled-components';

import React,{useEffect} from 'react';

import './products.css';


import Product from './Product';

import ReactPaginate from 'react-paginate';
import axios from 'axios';

import {showAverage} from '../rating';
import Loader from './Loader';



const Wrapper = styled.div`


display:flex;

flex-direction:column;

justify-content:space-between;

margin-bottom: 60px;

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


const Page = styled.div`



width: 80%;

@media screen and (max-width: 600px){

    

    width:300px;

    font-size:12px;

    margin-left:10px;

    display:flex;

    align-items:center;

    justify-content:center;
   
 
  
     
 
     
     
 }

`


const Products = ({cat,filters,sort,query}) => {

    
    const [products, setproducts] = React.useState([]);
    const [filteredProducts, setfilteredProducts] = React.useState([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

    


    const handlePageClick = (data) =>{


       
        setCurrentPage(data.selected + 1);



}

    

    useEffect(() => {



        setLoading(true);
        

        const getProducts = async() => {

                try {


                    


                    if(cat){


                         const res = await axios.get(`http://localhost:4444/api/products?category=${cat}&page=${currentPage}&limit=12`);

                         setproducts(res.data);




                    }else if(query){

                         const res = await axios.get(`http://localhost:4444/api/products?search=${query}&page=${currentPage}&limit=12`);

                         setproducts(res.data);

                         
                         

                    }else{



                         const res = await axios.get(`http://localhost:4444/api/products?page=${currentPage}&limit=12`);

                         setproducts(res.data);

                        

                    }


                    
                    
                    
                   
                    
                    
                } catch (error) {

                    
                    
                }

        }


        getProducts();

        setLoading(false);
        
    }, [cat,currentPage,query])



   



    useEffect(() =>{


        setLoading(true);


        cat && setfilteredProducts(

            products.filter((item) => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
        ); 


        setLoading(false);
    },[products,filters,cat,currentPage,query])


    useEffect(() =>{


        setLoading(true);


        query && setfilteredProducts(

            products.filter((item) => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
        ); 


        setLoading(false);


    },[products,filters,query,currentPage,cat])



   useEffect(() =>{

        setLoading(true);

        if(sort === "newest"){


            setfilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt));


        }else if(sort === "asc"){


            setfilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price));


        }else{


            setfilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price));

        }


        setLoading(false);

   },[sort,currentPage])

    
    return (


        <Wrapper>


            <Container>




                        

            { cat || query ? filteredProducts?.map((item,index) => (<Product item={item} key={index}/>)): products?.map((item,index) => (<Product item={item} key={index}/>))};



            </Container>



           
        <Page>



        <ReactPaginate 


previousLabel = {"Previous"}


nextLabel ={"Next"}


breakLabel ={"..."}


pageCount ={100}


marginPagesDisplayed = {3}


pageRangeDisplayed={6}


onPageChange ={handlePageClick}

containerClassName={"Pagination-Page"}

pageClassName={'Page-Item'}

pageLinkClassName={'Page-Link'}


previousClassName={'Page_Previous'}

nextClassName={'Page_Previous'}

nextLinkClassName={'Page_Previous'}


breakClassName={'Page-Break'}

breakLinkClassName={'page-link'}

activeClassName={'active-Item'}




/>



        </Page>

           

           {loading && <Loader />}


        </Wrapper>
        
    )
}

export default Products;
