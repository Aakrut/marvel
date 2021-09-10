import styled from "styled-components";



export const Card = styled.div`
max-width: 100%;
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

export const NameOverlay = styled.div`
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