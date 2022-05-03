import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined ,ArrowRightOutlined } from '@material-ui/icons';



import {useState,useEffect} from 'react';
import Loader from './Loader';
import axios from 'axios';

const Container = styled.div`

display: flex;

height:80vh;

width:100%;

position: relative;

overflow: hidden;


@media screen and (max-width: 1500px){

   
   
    height:auto;  

    

    
    
}


`

const Arrow = styled.div`
width:50px;

height:50px;

background-color: #FF7BA9;

border-radius: 50%;

display: flex;

align-items: center;

justify-content: center; 

position: absolute;

top: 0;

bottom: 0;


left: ${props => props.direction ==="left" && "20px"};

right: ${props => props.direction ==="right" && "20px"};

margin: auto;


cursor:pointer;

opacity: 0.9;

z-index: 2;


`

const Wrapper = styled.div`

height: 100%;

display: flex;

transform: translateX(${props => props.slideIndex * - 100}vw);

transition: all 2.0s ease;



`

const Slide = styled.div`

display: flex;

align-items:center;

justify-content:center;

width: 100vw;

height: 90vh; 

@media screen and (max-width: 1500px){

    
    height: auto;

    display:flex;

    flex-direction:column;


    
    

    
    
}









`

const ImgContainer=styled.div`

width: 50%;
display:flex;

margin-right:20px;

flex-direction: flex-end;

height:100%;


@media screen and (max-width: 600px){

    
    height: 50%;

    width:50%;

    flex:1;

    
    

    
    
}

`

const Image = styled.img`






object-fit: contain;

margin:40px;

display:flex;

align-items:center;

justify-content:center;


@media screen and (max-width: 900px){

    
    height: 400px;

    margin:10px;

    width:100%;

    flex:1;

    
    

    
    
}







`




const InfoContainer= styled.div`


padding: 30px;

height:70%;

width:50%;

border-radius: 50%;
background-color: #fcf1ed;


@media screen and (max-width: 600px){

    
    width:50%;

    flex:1;

    

    padding: 5px;


    

    
    
}




`

const Title = styled.h3`


font-size:50px;





font-weight:600;

color: #444;


@media screen and (max-width: 600px){

    font-size:20px; 
   
    

    
    
}




`

const Desc = styled.p`

margin: 50px 0px;

font-size: 20px;

font-weight: 500px;

letter-spacing: 3px;


@media screen and (max-width: 600px){

    font-size:12px; 
   
    
    margin: 20px 0px;
    
    
}




`

const Button = styled.button`
padding: 15px;

font-size: 18px;

background-color: transparent;

cursor:pointer;


transition: all 1.5s ease;

 &:hover{


    transform: scale(1.2);

    background-color: teal;

    color: white;

    border: none;

    font-weight: 600;

   

    
 }


 @media screen and (max-width: 600px){

    font-size:12px; 

    padding:5px;

    


   
    

    
    
}


 
`

const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);

const [slider, setSlider] = useState([]);

const [loading, setLoading] = useState(false);




useEffect(() =>{



    setLoading(true);

    const getSlider = async() =>{


        try {
            

            const res = await axios.get('http://localhost:4444/api/slider/');


            setSlider(res.data);
        } catch (error) {


            console.log('something went wrong');
            
        }

        
    }

    getSlider();

setLoading(true);

},[])




const handleClick = (direction) =>{



   


    if(direction === "left"){

       

            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    
      


        


       

    }else{

       

            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    
      

       



        


    }
}


    return (
        <Container>

            <Arrow direction="left" onClick={() => handleClick("left")}>

                <ArrowLeftOutlined style={{color:"white", fontsize: "20px"}}/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {slider.map((item) => 
                
               ( <Slide bg={item.bg} index={item.index}>


                            <ImgContainer>

                                <Image src={item.img}/>


                            </ImgContainer>

                            
                            

                            <InfoContainer>

                                <Title>{item.title}</Title>

                                <Desc>{item.desc}</Desc>

                                <Button>SHOP NOW</Button>



                            </InfoContainer>
                 </Slide>))


               
                
                
                
                
                }

                


            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("left")}>

               

                <ArrowRightOutlined style={{color:"white", fontsize: "20px"}}/>

            </Arrow>

            
            {loading && <Loader />}

        </Container>
    )
}

export default Slider
