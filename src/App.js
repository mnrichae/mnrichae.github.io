import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Home from './views/pages/Home';
// import Slider from './views/components/Slider';
import style from './views/components/Style';

import Skills from './views/pages/Skills';
import Projects from './views/pages/Projects'



function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={style.container} maxWidth={false}>
        {/* <Slider /> */}
        <Home />
      </Container >
      <Container >
        <Skills />
      </Container>
      <Container  sx={style.container2} maxWidth={false} >
        <Projects />
      </Container>
    
    </>
  );
}

export default App;
