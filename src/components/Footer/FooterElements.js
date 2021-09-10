import { Link } from "react-router-dom";
import styled from "styled-components";


export const FooterContainer = styled.div`

max-width: 1100px;
padding: 10px ;
margin: 0 auto;

display: grid;
grid-template-rows: repeat(2,1fr);
justify-content: center;
align-items: center;


`

export const Heading = styled.h2`
font-weight: bold;
font-size: 2.3rem;
color: white;
cursor: pointer;
`

export const Socials = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: hidden;

`

export const SocialLink = styled(Link)`
width: 100%;
height: 100px;
color: white;
text-decoration: none;
font-size: 2.2rem;
cursor: pointer;
transition: all 0.3s ease-in-out;
display: flex;
align-items: center;
justify-content: center;


&:hover{
    transform: translate(0,10%);
}

`