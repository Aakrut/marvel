import React from 'react';
import {FooterContainer,Heading,Socials,SocialLink} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>

            
                <Heading>
                    MARVEL
                </Heading>

                <Socials>
                    <SocialLink to='/'>
                        <i class='bx bxl-instagram'></i>
                    </SocialLink>
                    <SocialLink to='/'>
                        <i class='bx bxl-twitter' ></i>
                    </SocialLink>

                    <SocialLink to='/'>
                        <i class='bx bxl-facebook' ></i>
                    </SocialLink>

                </Socials>
                
            </FooterContainer>    
        </>
    )
}

export default Footer
