import React from 'react';

//styled components
import { ThemeProvider } from "styled-components";

//material UI
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { green } from '@material-ui/core/colors';



  //Mui does have a default structure that their components inherit their styling from we
  // need to modify this existing structure in order to change the overarching theme
  //https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component

  const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: green,
  });

  //The MuiThemeProvider and the ThemeProvider both inject the theme into the context of the component

  const Themed = withStyles({muiTheme}, {withTheme: true})(({children }) => {
    return <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={muiTheme}>
                {children}
            </ThemeProvider>
          </MuiThemeProvider>
})

  export default Themed;