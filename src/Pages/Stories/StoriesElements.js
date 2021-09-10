import styled from "styled-components";


export const StoriesContainer = styled.section`
max-width: 1100px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 20px;
grid-template-rows: repeat(1,1fr);
align-content: center;
justify-content: center;

@media screen and (max-width:960px){
    grid-template-columns: repeat(2,1fr);
    
}

@media screen and (max-width:460px){
    grid-template-columns: repeat(1,1fr);
    
}

`



export const Story = styled.div`
max-width: 100%;
height: 450px;
cursor: pointer;
margin: 0 10px;
display: flex;
flex-direction: column;
justify-content: center;
text-align:center;

border: 2px solid white;


@media screen and (max-width:960px){

    height: 300px;
    
}

@media screen and (max-width:460px){

    height: 300px;
    
}



`

export const StoryHeading = styled.h4`
color: white;

@media screen and (max-width:460px){

    font-size: 0.8rem;
    
}

`

export const StoryOriIssue = styled.p`
color: white;



@media screen and (max-width:460px){

    font-size: 0.7rem;
    
}
`

export const Btn = styled.button`

object-fit: contain;
padding:1rem 0;
border: 2px solid white;
background: transparent;
color: white;
margin: 0 40px;
transition: all 0.3s ease-in-out;
cursor: pointer;
font-weight: bold;

&:hover{
    background: white;
    color: black;
    transform: translate(0,10%);

}
`