import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';

// import style from '../components/Style'

import HTML from '../../media/icons/HTML.png'
import CSS from '../../media/icons/CSS.png'
import JS from '../../media/icons/JS.png'
import JAVA from '../../media/icons/Java.png'
import BS from '../../media/icons/Bootstrap.png'
import MUI from '../../media/icons/MUI.png'
import PHP from '../../media/icons/php.png'
import Laravel from '../../media/icons/Laravel.png'
import MERN from '../../media/icons/MERN.png'
import MYSQL from '../../media/icons/mySQL.png'
import GITHUB from '../../media/icons/Github.png'
import AWS from '../../media/icons/AWS.png'
import style from '../components/Style'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Skills(props)
{

    const firstSlide = [
        {
            img: HTML,
            title: 'HTML',
        },
        {
            img: CSS,
            title: 'CSS',
        },
        {
            img: JS,
            title: 'Javascript',
        }
        
    ];

    const secondSlide = [
        {
            img: JAVA,
            title: 'Java',
        },
        {
            img: BS,
            title: 'Bootstrap',
        },
        {
            img: MUI,
            title: 'MaterialUI',
        },
       
    ];

    const thirdSlide = [
        {
            img: Laravel,
            title: 'Laravel',
        },
        {
            img: PHP,
            title: 'PHP',
        },
        {
            img: MERN,
            title: 'MERN',
        }
        
       
    ];

    const fourthSlide = [
        {
            img: MYSQL,
            title: 'mySQL',
        },
        {
            img: GITHUB,
            title: 'GITHUB',
        },
        {
            img: AWS,
            title: 'AWS',
        }
    ];

    return (
        <Box>
            <Carousel 
                indicatorIconButtonProps={{
                style: {
                    padding: '10px',    // 1
                    // color: 'blue'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#5B1424' // 2
                }
            }}
            >
                    <ImageList sx={{display: 'flex', justifyContent: 'space-evenly'}} cols={4} rowHeight={180}>
                        {firstSlide.map((item) => (
                                <ImageListItem key={item.title} sx={style.imageList}>
                                    <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                        ))}
                    </ImageList>
                    <ImageList sx={{display: 'flex', justifyContent: 'space-evenly'}} cols={4} rowHeight={180}>
                        {secondSlide.map((item) => (
                                <ImageListItem key={item.title} sx={style.imageList}>
                                    <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                        ))}
                    </ImageList>
                    <ImageList sx={{display: 'flex', justifyContent: 'space-evenly'}} cols={4} rowHeight={180}>
                        {thirdSlide.map((item) => (
                                <ImageListItem key={item.title} sx={style.imageList}>
                                    <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                        ))}
                    </ImageList>
                    <ImageList sx={{display: 'flex', justifyContent: 'space-evenly'}} cols={4} rowHeight={180}>
                        {fourthSlide.map((item) => (
                                <ImageListItem key={item.title} sx={style.imageList}>
                                    <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                        ))}
                    </ImageList>
                
                
            </Carousel>
        </Box>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

        </Paper>
    )
}

export default Skills;