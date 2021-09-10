import styled from "styled-components";


export const SeriesContainer = styled.section`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 20px;
grid-template-rows: repeat(2,1fr);
align-content: center;
justify-content: center;

@media screen and (max-width:960px){
    grid-template-columns: repeat(2,1fr);
    
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