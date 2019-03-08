import React from 'react';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

// Styled Components
import { withTheme } from 'styled-components';

// const StyledDiv = styled.div`
//     width: 100%,
//     height: 100%,
//     display: flex,
//     justifyContent: center,
//     border: 3px solid blue

// `

const Container = ({children}) => {
    return  <Grid container spacing={16} direction="row" justify="center" alignItems="center">
                { children }
            </Grid>
}

export default withTheme(Container)