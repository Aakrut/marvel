import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeroSectionContainer = styled.section`

  width: 100%;
  height: 800px;

  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

`

export const Video = styled.video`
 width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  -o-object-fit:cover;
  
  background: #232a34;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`

export const HeroGrid = styled.div`
margin-top: -100px;
z-index: 1;
`

export const Content = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;

@media  screen and (max-width:960px){
    justify-content: center;
    align-items: center;
    display: block;
    margin: 0 30px;
}

`

export const Description = styled.div`
display: block;

`

export const BtnDiv = styled.div`
margin: 10px 0 ;
`

export const Button = styled.button`
border: 2px solid white;
background: ${(props)=> (props.Primary ? 'white': 'transparent')};
color: ${(props) => (props.Primary ? 'black' : 'white')};
padding: 20px 30px;
margin: 0 10px 0 0;
font-size: 0.9rem;
font-weight: bolder;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
    transform: translate(0,-10%);
}
`

export const Heading = styled.h2`
font-size: 3rem;
font-weight: bold;
color: white;
`

export const Paragraph = styled.p`
color: white;
font-weight: lighter;
`

export const Transparent = styled.div`
display: block;
`