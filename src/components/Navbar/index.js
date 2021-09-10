import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo,MobileIcon ,NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >
                       <h1>MARVEL</h1> 
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <i class='bx bx-menu'></i>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/characters'>
                            Characters
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/comics'>
                            Comics
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to='/series'>
                            Series
                            </NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to='/stories'>
                            Stories
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>    
            </Nav>    
        </>
    )
}

export default Navbar
