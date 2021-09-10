import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { CharactersContainer,Banner,HeroBg, Heading } from './CharactersElements';
import Footer from '../../components/Footer'
import Image1 from '../../Images/image-1.jpg'
import { requests } from '../../requests';


const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get(`http://gateway.marvel.com/v1/public${requests.fetchCharacters}`).then((res) => {
            
            setCharacters(res.data.data.results);
        }).catch((error) => {
            console.log(error.message);
        })

        
    }, []);


    return (


        <>
            <HeroBg>

            
            <Banner src={Image1} alt='image1'>
                    
                </Banner>

            </HeroBg>

            <Heading >
                Characters
            </Heading>


            <CharactersContainer>
                
                

            {
                characters.slice(0,18).map((character) => {
                    return (
                        <Cards uq={character.id} image={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name}
                            heading={character.name} />
                    )
                })
                }

            </CharactersContainer>

            <Footer />
        </>
    )
}

export default Characters
