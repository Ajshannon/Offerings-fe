import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

// Styled Components
import { withTheme } from 'styled-components';


const MyCard = styled(Card)`
&& {
    margin-top: 5vh;
    display: grid;
    width: 60vw;
    max-width: 400px;
    
    }
`

const MuiCard = ({children}) => {
    return <Grid item>
                <MyCard>
                        {children}
                </MyCard>
            </Grid>
}

export default withTheme(MuiCard)