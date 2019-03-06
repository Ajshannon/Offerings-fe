import React from 'react';

//styled components
import { ThemeProvider } from "styled-components";

//material UI
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { red } from '@material-ui/core/colors';




  //Mui does have a default structure that their components inherit their styling from we
  // need to modify this existing structure in order to change the overarching theme
  //https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component

  const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: "24px",
    },
    paper: {
      textAlign: 'center',
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    textField: {
      width: '45vw',
    },
    palette: {
      primary: {
        contrastText: "white",
        dark:"rgb(44, 126, 46)",
        light:"#0066ff",
        main:"#3fb542",
      },
      secondary: {
        main: '#2196f3'
      },
    },
    error: red,

  });

  console.log(muiTheme)
  //The MuiThemeProvider and the ThemeProvider both inject the theme into the context of the component

  const Themed = withStyles({muiTheme}, {withTheme: true})(({children}) => {
    return <MuiThemeProvider theme={muiTheme}>
              <ThemeProvider theme={muiTheme}>
                  {children}
              </ThemeProvider>
            </MuiThemeProvider>
})

  export default Themed;