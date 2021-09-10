import React from 'react'
import { Card,Image,NameOverlay,Name } from './CardsElements'

const Cards = ({key,name,image}) => {
    return (
        <>
            
                
            <Card key={key}>
                    
                    <Image src={image} alt={ name } />

                    <NameOverlay>
                        
                        <Name  >
                            {
                                name
                            }
                        </Name>

                    </NameOverlay>

                </Card>
                
          
        </>
    )
}

export default Cards
