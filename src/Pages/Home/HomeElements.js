import styled from "styled-components";


export const TrendingComics = styled.div`

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
export const ComicCard = styled.div`
width: 100%;
height: 400px;
border: 2px solid white;
position: relative;
overflow: hidden;

&:hover img{
    transform: scale(1.2);
}

`


export const Image = styled.img`
width:100%;
height: 100%;
position: absolute;
transition: all 0.3s ease-in-out;
cursor: pointer;


&:hover{
    transform: scale(1.5);
}

`



export const ComicName = styled.div`
height: 100%;
width: 100%;
position: absolute;
opacity: 0;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transition: all 0.3s ease-in-out;
cursor: pointer;
background:linear-gradient(to top,rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6));



&:hover{
    opacity: 1;
}

`

export const Name = styled.h4`
color: white;
`

export const SectionName = styled.h2`
color: white;
text-align: center;
margin: 30px 0 60px 0;

`



