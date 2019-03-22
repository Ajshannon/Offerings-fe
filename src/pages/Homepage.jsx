import React, { Component } from 'react';
import '../App.css';
import ImageGrid from '../components/Imagegrid'
import GreetAndHero from '../components/GreetAndHero'
import GridListHeader from '../components/CategoryHeaders';

import {withTheme} from "styled-components";
import Container from '../components/Container';

class Homepage extends Component {
    render() {

      return (
        <React.Fragment>
            <GreetAndHero />
            <Container>
            <GridListHeader category='Nearby' linky='SEE ALL'/>
            <ImageGrid/>
            <GridListHeader category="Recently posted" linky='SEE ALL'/>
            <ImageGrid/>
            <GridListHeader category='Your offerings' linky='NEW'/>
            <ImageGrid/>
            </Container>
        </React.Fragment>
      );
    }
  }

export default withTheme(Homepage);