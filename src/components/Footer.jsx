import React from 'react'
import styled from 'styled-components';
import { Room, Facebook, Instagram, Twitter, Pinterest, Phone, MailOutline, YouTube } from '@material-ui/icons';
import {mobile} from '../responsive';






const Wrapper = styled.div`


display:flex;

flex-direction:column;

background-color: #222;


@media screen and (max-width: 1100px){

    
    display:flex;
 
    flex-direction:column;
 
    height: auto;

    align-items:center;

    justify-content:center;
     
 
  
     
 }

`



const Container = styled.div`


background-color: #222;

color: #AAAAAAAA;


height:60vh;

padding:30px;

display: flex;


@media screen and (max-width: 1100px){

    
   display:flex;

   flex-direction:column;

   height:auto;
    

 
    
}


${mobile({flexDirection: "column"})}
`

const Left = styled.div`

flex: 1;

display: flex;

flex-direction: column;

padding: 20px;


`

const Logo = styled.img`


width:100px;

height:100px;

object-fit:cover;

`

const Desc = styled.p`

margin: 20px 0px;

font-size:15px;

font-weight:bold;
`

const SocialContainer= styled.div`

display: flex;







`
const SocialIcon = styled.div`


width: 40px;

height: 40px;

border-radius:50%;

color: white;

background-color: #${props => props.color};

display: flex;

align-items: center;

justify-content: center;

margin: 20px;

margin-bottom: 50px;

cursor:pointer;

@media screen and (max-width: 1100px){

    
    width: 30px;

    height: 30px;

    border-radius:50%;


    display: flex;

align-items: center;

justify-content: center;

    

 
    
}


`



const Center = styled.div`

flex: 1;

padding: 20px;
${mobile({display: "none"})}

`

const Title = styled.span`

margin-bottom: 50px;

color: #AAAAAA;
margin-bottom:30px;

font-size:25px;
font-family:'Cormorant Upright', serif;

`

const List = styled.ul`
margin-top:20px;

padding:0px;

list-style:none;

display: flex;


flex-wrap:wrap;



`

const ListItem = styled.li`


width: 50%;

margin-bottom: 10px;

font-weight:bold;

`

const Right = styled.div`

flex: 1;
padding: 20px;
font-weight:bold;
`

const ContactItem = styled.div`


margin-bottom: 20px;

display: flex;

align-items: center;

`






const Footer = () => {
    return (


        <Wrapper>


        
        <Container>

            <Left>


                <Logo src="/img/dubois.png" alt=""/>

                <Desc>
                    We are the best in selling women clothes globally and we are much happy announce we have recorded
                    numerous events or milestone in providing quality products interms of skin care and other things.
                    We are therefore encourage you to look to our new products and leave a positive feedback.
                </Desc>

                <SocialContainer>

                    <SocialIcon color = "3B5999">

                        <Facebook />

                    </SocialIcon>

                    <SocialIcon color = "E4405F">

                        <Instagram />
                
                    </SocialIcon>

                    <SocialIcon color = "55ACEE">

                        <Twitter />
                        
                    </SocialIcon>

                    <SocialIcon color="E60023">

                        <Pinterest />
                    </SocialIcon>


                    <SocialIcon color="E60023">

                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>


                <Title >Useful links</Title>

                <List>

                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish Listing</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List>
            </Center>

            <Right>


                <Title >Contact us.</Title>

                <ContactItem style={{marginTop:"20px"}} >
                    
                    <Room style={{marginRight: "10px"}}/>
                    PO BOX 198-50056 NAIROBI, KENYA
                    
                    </ContactItem>
                <ContactItem>

                    <Phone style={{marginRight: "10px"}}/>
                    +254727632051
                    
                    </ContactItem>
                <ContactItem>

                    <MailOutline style={{marginRight: "10px"}}/>
                    info@contactdccosmetics.com
                    
                    </ContactItem>

                    
            </Right>


           
        </Container>



        <span style={{marginBottom:"60px" ,width:"100%", color:'white', display:'flex', alignItems:'center',justifyContent:'center'}}>Developed by Dopesick &copy; 2022</span>


        </Wrapper>
    )
}

export default Footer
