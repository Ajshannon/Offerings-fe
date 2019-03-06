import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// const styles = {
//     cardContainer: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center'
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignContent: 'center',
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       flexWrap: 'wrap',
//       width: '55%',
//       height: '45%',
//       marginTop: '7%',
//       marginleft: '10%',
//       marginRight: '10%'
//     },
//     title: {
//       fontSize: 12,
//       color: 'black',
//       display: 'flex',
//       justifyContent: 'center',
//       marginTop: '1vh',
//       marginBottom: '1vh',
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     textField: {
//         width: '45vw',
//     },
//     bootstrapRoot: {
//       display: 'flex',
//       boxShadow: 'none',
//       textTransform: 'none',
//       fontSize: 16,
//       width: '25vw',
//       height: '5vh',
//       border: '1px solid',
//       lineHeight: 1.5,
//       backgroundColor: 'Green',
//       borderColor: 'Green',
//     },
//     ButtonContainer: {
//         display: 'flex',
//         width: '100%',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '3vh',
//         marginBottom: '5vh'
//     },
//     signupForm: {
//         display: 'flex',
//         flexDirection: 'column',
//         marginBottom: '5%',
//     },
//   };

  function MaterialIcon(props) {
    return (
      <i class='material-icons md-84' style={{background: 'lightgrey',
                                              borderRadius: '50%',
                                              marginTop: '3vh',
                                              marginBottom: '1vh'}}>
        {props.icon}
      </i>
    )
  }
  
  function ProfileForm(props) {
    const { classes } = props;


    return (

      <Card className={classes.card}>

        <MaterialIcon icon='face'/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            CHANGE YOUR PROFILE
          </Typography>
          <br />
          <form>
            <TextField
              id="standard-with-placeholder"
              label="First Name"
              placeholder="Placeholder"
              margin="normal"
            />
            <TextField
              id="standard-with-placeholder"
              label="Last Name"
              placeholder="Placeholder"
              margin="normal"
            />
            <TextField
              id="standard-with-placeholder"
              label="Phone Number"
              placeholder="Placeholder"
              margin="normal"
            />
        </form>
        <CardActions>

          <Button
            variant="contained"
            color="primary"
            // className={classes.bootstrapRoot}
          >
            Finish
          </Button>
        </CardActions>
      </Card>

    );
  }
  
  ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (ProfileForm);