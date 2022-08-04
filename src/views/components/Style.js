const style = {
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      background: 'linear-gradient(to right bottom, #A7AABC, #737687, #0D2E60)',
      maxWidth: '100%',
      maxHeight: '100%',
      overflowX: 'hidden'
    },

    container2: {
        paddingLeft: 0,
        paddingRight: 0,
        background: 'linear-gradient(to right bottom, #0D2E60, #737687, #A7AABC)',
        maxWidth: '100%',
        maxHeight: '100%',
        overflowX: 'hidden'
      },

    imageList: {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      width: '11em',
      height: '2em',
      "@media (max-width: 600px)": {
        width: '8em',
        height: '0.5em',
      },
      overflowX: 'hidden'
    },
  
    home: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
        overflowX: 'hidden'
    },

    projects: {
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100vh',
      paddingLeft: "1em",
      paddingRight: "1em",
      "@media (max-width: 600px)": {
        marginTop: "50em",
        marginRight: "1em",
      },
  },
    
    myName: {
        fontSize: '3em',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bolder', 
        color: '#0D2E60',
        paddingLeft: '1em',
        paddingRight: '1em'
    },

    subLabel:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: "#d1d1d1",
        paddingLeft: '1em',
        paddingRight: '1em'
    },


  };
  
  export default style;