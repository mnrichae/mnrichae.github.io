import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


import MyPic from '../components/MyPic'
import style from '../components/Style'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  textAlign: 'center',
}));

export default function Home() {
  return (
    <>
    <Box sx={style.home}>
      <Stack spacing={2}>
        <Item sx={{display: 'flex', justifyContent: 'center'}}><MyPic /></Item>
        <Item sx={style.myName}>Richae Abangan</Item>
        <Item sx={style.subLabel}>AWS Re/Start Graduate &amp;&amp; Full-Stack Web Developer</Item>
        <Item>
        <Button href='https://www.linkedin.com/in/mnrichae/' target="_blank" variant="contained" sx={{marginTop: '0.5em', backgroundColor: '#5B1424' }}>
                Visit LinkedIn
        </Button>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item >Scroll down to see more</Item>
        <Item><KeyboardDoubleArrowDownIcon sx={{color: '#5B1424'}} /></Item>
      </Stack>
    </Box>
    
    </>
  );
}
