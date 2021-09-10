import React from 'react'
import { HeroSectionContainer, Video,HeroBg,HeroGrid, Description,Heading,Paragraph,BtnDiv,Button,Transparent,Content} from './HeroElements';
import Videos from '../../Videos/video-1.mp4'


const HeroContainer = () => {
    return (
        <>
            <HeroSectionContainer>
                
                <HeroBg>
                    <Video src={Videos} type="video/mp4" autoPlay muted loop />
               
               </HeroBg>
                    

                <HeroGrid>
                    
                    <Content>
                    <Description>
                        
                        <Heading>
                            WHAT IF?
                        </Heading>

                        <Paragraph>
                            What If...? is an American animated anthology series created by A.C. Bradley for the streaming service Disney+, based on the Marvel Comics series of the same name. It is the fourth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, and the studio's first animated series. The series explores alternate timelines in the multiverse that show what would happen if major moments from the MCU films occurred differently. Bradley serves as head writer with Bryan Andrews directing.
                        </Paragraph>

                        <BtnDiv>
                            <Button>
                              Disney +  
                            </Button>
                            <Button Primary>
                                WATCH TRAILER
                            </Button>
                        </BtnDiv>

                    </Description>
                    <Transparent>

                    </Transparent>
                    </Content>
                </HeroGrid>
                

            </HeroSectionContainer>
            
        </>
    )
}

export default HeroContainer
