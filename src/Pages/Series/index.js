import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { SeriesContainer, HeroBg, Banner,Heading } from './SeriesElements';
import Image3 from '../../Images/image-3.jpg'
import { requests } from '../../requests';

const Series = () => {

    const [series, setSeries] = useState([]);


    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public${requests.fetchSeries}`).then((res) => {
            
            setSeries(res.data.data.results);
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);

    return (
        <>
            
            <HeroBg>

            
            <Banner src={Image3} alt='image1'>
                    
                </Banner>

            </HeroBg>

            <Heading>
                Series
            </Heading>

            <SeriesContainer>

                {
                    series.slice(0,18).map((ser) => {
                        return (
                            <Cards uq={ser.id} image={`${ser.thumbnail.path}.${ser.thumbnail.extension}`}
                            
                            name={ser.title}
                            />

                            
                        )
                    })
                }
                
            </SeriesContainer>

            <Footer />
        </>
    )
}

export default Series
