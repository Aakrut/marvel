import styled from "styled-components";

export const CharactersContainer = styled.section`
max-width: 1100px;
margin: 20px auto;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 1fr 1fr;
grid-gap: 20px;

@media screen and (max-width:860px){
    
    grid-template-columns: repeat(2,1fr);
    padding: 0 20px;
}

`

export const Banner = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
`

export const HeroBg = styled.div`
width: 100%;
height: 100vh;
object-fit: contain;
-o-object-fit:cover;
`

export const Heading = styled.h2`
font-weight: bold;
text-align: center;
margin: 40px 0;
color: white;
font-size: 1.8rem;
`

