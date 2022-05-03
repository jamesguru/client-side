
import styled from 'styled-components';
import{mobile} from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`


display:flex;

flex: 1;

margin-right:10px;

height:70vh;

position: relative;




@media screen and (max-width: 600px){

    

    display:flex;

    flex-wrap:wrap;

    align-items:center;

    justify-content:center;
    max-width: 150px;

    height: 200px;

    height:50vh;
}




`

const Image = styled.img`

height: 60vh;

margin:10;

width: 100%;



object-fit:cover;







`
const Info = styled.div`


position: absolute;

top:0;

left:0;

width: 100%;

height:100%;

display: flex;

align-items: center;

justify-content:center;

flex-direction:column;

`

const Title = styled.h1`

color:white;

margin-bottom:10px;


@media screen and (max-width: 600px){

    
    display:none;
}

`

const Button = styled.button`


border: none;

padding:15px;

background-color: white;

color:gray;

font-size: 20px;

font-weight: 600;

transition: all 1s ease;

cursor:pointer;

&:hover{


    transform: scale(1.1);

    background-color: #FF7BA9;

    color: white;

    border: none;

    font-weight: 600;

   

    
 }


 @media screen and (max-width: 600px){

    
    width: 50%;

    height: 20%;

    font-size:10px;

    font-weight: 600;



    
}

`

const CategoryItem = ({item}) => {
    return (
        <Container>


            

            <Link to={`/products/${item.cat}`}>
            

                    <Image src={item.img}/>

                    <Info>

                        <Title>{item.title}</Title>

                        <Button>SHOP NOW</Button>

                    </Info>
            
            
            
            </Link>

            
            
        </Container>
    )
}
 
export default CategoryItem;
