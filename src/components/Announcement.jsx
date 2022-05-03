import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import Jumbtron from './Jumbtron';

const Container = styled.div`
height: auto;
background-color: #FF7BA9;
color: white;

display: flex;

align-items: center;

justify-content: center;

font-size: 18px;

font-weight: 700;



@media screen and (max-width: 600px){

    

    


    font-size:14px;

    
}





`


const Heading = styled.div`

 
font-size:22px;

font-weight:900;

font-family: "Cormorant Upright";


width: 80%;

padding: 5px;

text-align:center;

@media screen and (max-width: 600px){

    

    


    font-size:10px;
    font-weight:900;

    
}




animation: inProgress 0.4s ease infinite alternate;


@keyframes inProgress{

    from{


        opacity: 0;

        transform: scale(1);

    }


    to{

        opacity:1;

        transform: scale(1.1);

    }

`






const Announcement = () => {


        const [annoucement, setAnnoucement] = React.useState([]);
        
        
    useEffect(() =>{


        const getAnnoucement =  async () => {
    
    
    
            try {
    
    
                const res =  await axios.get('http://localhost:4444/api/annoucement/');


                setAnnoucement(res.data);



                
            } catch (error) {


                console.log("something went wrong");
                
            }
        }
    
        getAnnoucement();
    
    },[])
    return (
        <Container>


            {annoucement.map((singleAnnoucement,index) => (<Heading key={index}>{singleAnnoucement.title}</Heading>))}

            <Jumbtron />
            
        </Container>
    )
}

export default Announcement
