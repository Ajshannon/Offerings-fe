import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: no-wrap;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1%;
    margin-bottom: 1.5%

`
const OfferingType = styled.h1`
    font-family: Roboto;
    font-size: 57;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #020202;
    margin: 0;
`

function GridListHeader(props) {
return (
    <TitleContainer>
        <OfferingType> {props.category} </OfferingType> <a href="/"> { props.linky } </a>
    </TitleContainer>
)
}

export default GridListHeader
