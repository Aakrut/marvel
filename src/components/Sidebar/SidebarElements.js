import styled from "styled-components";
import {Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: all 0.3s ease-in-out;
opacity: ${(isOpen) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};


`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
outline: none;
cursor: pointer;
color: white;
font-size: 2.4rem;
`

export const SideWrapper = styled.div`
color: white;

`


export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width:480px){
    grid-template-rows: repeat(6,60px);
}
`

export const SidebarLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: all 0.2s ease-in-out;
color: white;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`


