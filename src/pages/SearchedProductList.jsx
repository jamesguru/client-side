
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import {mobile} from '../responsive';
import { useLocation } from 'react-router-dom';
import Brands from '../components/Brands';
import NavCategory from '../components/NavCategory';



const Container = styled.div`




`


const Title = styled.h3`


margin:10px;

background-color: #FF7BA9;

width: 15%;


color: white;

text-align:center;

`

const FilterContainer = styled.div`

display: flex;

justify-content: space-between;
`

const Filter= styled.div`

margin: 20px;

${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}

@media screen and (max-width: 600px){

   

  margin: 0px 20px;

  display:flex;

  flex-direction: column;


    
}



`

const FilterText = styled.span`

font-size: 20px;

font-weight: 600;

margin-right: 20px;

${mobile({marginRight: "0px"})}

@media screen and (max-width: 600px){

   

    margin-right: 0px;

    font-size: 13px;


    
}


`
const Select = styled.select`

padding: 10px;

margin-right: 20px;

${mobile({margin: "10px 0px"})}


@media screen and (max-width: 600px){

   

    margin: 10px 0px;

    padding: 5px;
    
}

`

const Option = styled.option`

font-size: 16px;

font-weight: bold;

`
const SearchProductList = () => {


   const location = useLocation();

   const query = location.pathname.split("/")[2];

   


   const cat = '';

    const [filters, setFilters] = React.useState({});

    const [sort, setSort] = React.useState("newest");

   

    const handleFilters=(e) => {

            const value = e.target.value;

            setFilters({

                    ...filters,

                    [e.target.name]: value,
            });

    }

    
  
  
    return (
        <Container>

            <Announcement />
            <Navbar />
            <NavCategory />

            <Title>{query.toUpperCase()}</Title>

            <FilterContainer>

                <Filter>

                    <FilterText>Filter Products:</FilterText>

                    <Select name="color" onChange={handleFilters}>

                        <Option disabled>

                            Color

                        </Option>

                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>

                        

                <Select name="size" onChange={handleFilters}>

                        <Option disabled>

                            Size

                        </Option>

                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
               
                </Select>
                </Filter>
                <Filter>

                    <FilterText>

                        Sort Products:
                    
                    </FilterText>

                    <Select onChange={(e) => setSort(e.target.value)}>

                   

                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price(asc)</Option>
                    <Option value="desc">Price(desc)</Option>
                    
                    </Select>
                </Filter>
                
            </FilterContainer>


            

            <Products query={query} cat={cat} filters={filters} sort={sort}/>

            <Brands />

            <Newsletter />

            <Footer />
            
        </Container>
    )
}

export default SearchProductList;
