import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import { StoriesContainer, Story, StoryHeading, StoryOriIssue, Btn } from './StoriesElements'
import { requests } from '../../requests';

const Stories = () => {


    const [stories, setStories] = useState([]);


    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public${requests.fetchStories}`).then((res) => {
           
            setStories(res.data.data.results);
        }).catch((error) => {
            console.log(error.message);
        })

    }, []);


    return (
        <>
            <StoriesContainer>
                  
                    {
                        stories.slice(0,8).map((story) => {
                            return (
                                <Story uq={story.id}>
                                    
                                    <StoryHeading>
                                        {
                                                                            story.title
                                        }
                                    </StoryHeading>
                                        
                                    <StoryOriIssue>
                                        Original Issue -  {
                                                                story.originalIssue.name
                                        }

                                    </StoryOriIssue>

                                    <Btn>
                                        View More
                                    </Btn>
                        </Story>
                            )
                        })
                    }

            </StoriesContainer>

            <Footer />
        </>
    )
}

export default Stories
