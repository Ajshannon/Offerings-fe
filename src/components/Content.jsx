import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

// Styled Components
import { withTheme } from 'styled-components';


const MyContent = styled(CardContent)`
&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: auto;
    max-width: 400px;
    }
`

const Content = ({children}) => {
    return      <MyContent>
                    {children}
                </MyContent>
}

export default withTheme(Content)