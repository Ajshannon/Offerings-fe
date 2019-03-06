import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignContent: 'center',
//     justifyContent: 'flex-start',
//     flexWrap: 'wrap',
//     minWidth: 275,
//     height: '40%',
//     marginTop: '5vh',
//     marginleft: '10%',
//     marginRight: '10%'
//   },
//   title: {
//     fontSize: 24,
//     color: 'black',
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '1vh',
//     marginBottom: '5vh',
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   textField: {
//       width: '60vw',
//       marginBottom: '10%',
//   },
//   bootstrapRoot: {
//     display: 'flex',
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     width: '25vw',
//     height: '5vh',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: 'Green',
//     borderColor: 'Green',
//   },
//   ButtonContainer: {
//       display: 'flex',
//       width: '100%',
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginBottom: '1vh'
//   },
//   signupForm: {
//       display: 'flex',
//       flexDirection: 'column',
//   }
// };


function SignupForm(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sign Up for Offerings
        </Typography>
        <br />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="Username"
              id="username"
              className={classes.textField}
            />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="Password"
              id="password1"
              className={classes.textField}
            />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="confirm Password"
              id="password2"
              className={classes.textField}
            />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="First Name"
              id="first_name"
              className={classes.textField}
            />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="Last Name"
              id="last_name"
              className={classes.textField}
            />
            <TextField
              onChange={ props.handleInputChange }
              defaultValue=""
              label="Email Address"
              id="email"
              className={classes.textField}
            />
          <div className={classes.ButtonContainer}>
            <Button
              type='submit'
              variant="contained"
              color="primary"
              className={classes.bootstrapRoot}
              onClick={ props.handleSignup }
            >
              Sign Up
            </Button>
          </div>
      <CardActions>
      </CardActions>
    </Card>
  );
}

// SignupForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (SignupForm);