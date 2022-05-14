import styled from 'styled-components';
import {React,useEffect,useState} from 'react';

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



    return( 
        <Container>

            
            <CategoryItem>

                <CatHeader title="Watch"/>
                <CatBody  cat="watch"/>


            </CategoryItem>
            
            



            
            <CategoryItem>

            <CatHeader title="Face"/>
            <CatBody  cat="face"/>


            </CategoryItem>



            
            <CategoryItem>

            <CatHeader title="Hand"/>
            <CatBody  cat="hand"/>

            </CategoryItem>

            
            
        </Container>);
}

export default Categories;
