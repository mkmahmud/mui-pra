import { createTheme } from '@mui/material/styles';


export const Theme = createTheme({
  palette: {
    primary: {
      main: '#f94944',
    }
  },    

  components:{
    MuiContainer:{
        defaultProps:{
            maxWidth:'xl'
        },
    },
    MuiButton:{
        styleOverrides:{
            root:{
                fontSize:'1rem',
                padding:'0.5rem 1rem',
                borderRadius:'40px',
                textTransform:'uppercase'
            },
        },
    },
  }
});
