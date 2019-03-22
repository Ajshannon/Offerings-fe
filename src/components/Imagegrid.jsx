import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components'
import Container from './Container';
import { Card } from '@material-ui/core';


const styles = theme => ({

    gridList: {
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54',
    },
    title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    })

const Divider = styled.hr`
    color: gray;
    height: 0.5px;
    background-color: rgba(0, 0, 0, 0.12);
`


class ImageGrid extends React.Component {
    state = {
        tileData: []
    }
    componentDidMount(){
        fetch("http://damp-refuge-45650/api/v1/offerings/")
            .then(res => {
                return res.json()})
            .then(data => {
                this.setState({tileData: data.results});
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <Card>
                <div>
                <Divider/>
                <GridList className={classes.gridList} col={2.5}>
                    {this.state.tileData.map(tile => (
                        
                        <GridListTile key={tile.image} cols={.5}>
                            
                            <img src={tile.image} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.profile}</span>}
                                
                                this={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                                />
                        </GridListTile>
                    ))}
                </GridList>
                </div>
                </Card>
            </Container>
            );
        }}

ImageGrid.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default withStyles(styles)(ImageGrid)