import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Footer from '../../components/Footer';
import HeroContainer from '../../components/HeroContainer';
import { TrendingComics, Image, ComicCard, ComicName, Name, SectionName } from './HomeElements'
import { requests } from '../../requests';

const Home = () => {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public${requests.fetchComics}`).then((res) => {
           
            setComics(res.data.data.results)
        }).catch((error) => {
            console.log(error.message);
       })
    },[]);


    return (
        <>
            
            <HeroContainer />

            <SectionName>
                Tranding Comics
            </SectionName>

            <TrendingComics>
                {
                    comics.slice(4,12).map((comic) => {
                        return (

                            <ComicCard key={comic.id}>

                            

                            
                                <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title}`} />
                                
                                <ComicName>
                                    <Name>

                                    
                                    {
                                        comic.title
                                    }
                                    </Name>
                                </ComicName>
                                
                            </ComicCard>
                        )
                    })
                }
            </TrendingComics>

            <Footer />
        </>
    )
}

export default Home
