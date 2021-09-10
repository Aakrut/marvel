import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { ComicsContainer, HeroBg, Banner, Heading } from './ComicsElements'
import Image2 from '../../Images/image-2.jpg'
import { requests } from '../../requests';


const Comics = () => {

    const [comic, setComic] = useState([]);

    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public${requests.fetchComics}`).then((res) => {
            
            setComic(res.data.data.results);
        }).catch((error) => {
            console.log(error.messsage);
        })
    }, []);



    return (
        <>
            
            <HeroBg>

            
            <Banner src={Image2} alt='image1'>
                    
                </Banner>

            </HeroBg>

            <Heading>

                Comics

            </Heading>

            <ComicsContainer>
                {
                    comic.map((comics) => {
                        return (
                            <Cards key={comics.id} image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} name={comics.title}  />
                        )
                    })
                }

            </ComicsContainer>

            <Footer />
        </>
    )
}

export default Comics
