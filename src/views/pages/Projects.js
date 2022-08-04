import * as React from 'react';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import style from '../components/Style'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
    <Box sx={style.projects}>
      <Grid container spacing={2}>
        {itemData.map((item) => (
            <Grid item md={4} xs={12} key={item.img}>
                <CardMedia
                  component="iframe"
                  image={item.img}
                  sx={{height: '20em'}}
                />
                <Button href={item.live} target="_blank" variant="contained" sx={{marginTop: '0.5em', backgroundColor: '#0D2E60'}}>
                  View Demo
                </Button>
                
            </Grid>
          ))}
      
      </Grid>
    </Box>
    </>
  );
}

const itemData = [
  {
    img: "https://www.youtube.com/embed/WMiRFGxkfPA",
    title: 'KLR Tutorials (Best Capstone Project)',
    author: 'HTML/CSS/SASS, JS, PHP, Bootstrap, AJAX, SweetAlert, mySQL',
    live: "http://13.228.73.188/klrtutorials/",
    featured: true
  },
  {
    img: "https://www.youtube.com/embed/iIgAhotlZ8c",
    title: 'Coding Journal',
    live: "https://github.com/mnrichae/mycodingjournallaravelreact",
  },
  {
    img: "https://www.youtube.com/embed/8UamDJQyCcQ",
    title: 'Enrollmentform',
    live: "https://github.com/mnrichae/enrolkodego",
  },
  
  {
    img: "https://www.youtube.com/embed/hXbvFqdR0zU",
    title: 'ELi5',
    live: "https://mnrichae.github.io/eli5/",
  },
  {
    img: "https://www.youtube.com/embed/AhC38xHCo24",
    title: 'EZ.com',
    live: "https://leojomar01.github.io/MiniProject-2/",
  },
  {
    img: "https://www.youtube.com/embed/JZ65dONZCcQ",
    title: 'Clinic System',
    live: "https://mnrichae.github.io/smallclinicsystem/",
  },
];
