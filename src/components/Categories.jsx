import styled from 'styled-components';
import {React,useEffect} from 'react';

import { publicRequest } from '../requestMethods';

import CatHeader from './CatHeader';
import CatBody from './CatBody';


const Container = styled.div`

    
`


const CategoryItem = styled.div`

display: flex;


flex-direction:column;


`


const Categories = () => {


    const [catbody, setCatBody] = React.useState([]);

    const [catSpecial, setCatSpecial] = React.useState([]);

    const [catBrand, setCatBrand] = React.useState([]);
        
        
    useEffect(() =>{


        const getCatBody =  async () => {
    
    
    
            try {
    
    
                const res =  await publicRequest.get("/catbody");


                setCatBody(res.data);



                
            } catch (error) {


                console.log("something went wrong");
                
            }
        }
    
        getCatBody();
    
    },[])

    useEffect(() =>{


        const getCatSpecial =  async () => {
    
    
    
            try {
    
    
                const res =  await publicRequest.get("/specialoffer");


                setCatSpecial(res.data);



                
            } catch (error) {


                console.log("something went wrong");
                
            }
        }
    
        getCatSpecial();
    
    },[])


    useEffect(() =>{


        const getCatBrand =  async () => {
    
    
    
            try {
    
    
                const res =  await publicRequest.get("/brand");


                setCatBrand(res.data);



                
            } catch (error) {


                console.log("something went wrong");
                
            }
        }
    
        getCatBrand();
    
    },[])



    return( 
        <Container>

            
            <CategoryItem>

                <CatHeader />
                <CatBody />


            </CategoryItem>
            
            


            
            <CategoryItem>

                <CatHeader />
                <CatBody />


            </CategoryItem>



            
            <CategoryItem>

                <CatHeader />
                <CatBody />


            </CategoryItem>

            
            
        </Container>);
}

export default Categories;
