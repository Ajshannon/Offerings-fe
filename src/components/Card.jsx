import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

// Styled Components
import { withTheme } from 'styled-components';


const MyCard = styled(Card)`
&& {
    margin-top: 5vh;
    display: grid;
    width: 60vw;
    max-width: 600px;
    
    }
`
const MyContent = styled(CardContent)`
&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: auto;
    }
`

const MuiCard = ({children}) => {
    return <Grid item>
                <MyCard >
                    <MyContent>
                        {children}
                    </MyContent>
                </MyCard>
            </Grid>
            
}

export default withTheme(MuiCard)