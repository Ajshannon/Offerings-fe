import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';

import { reduxForm, Field } from 'redux-form';
import isValidEmail from 'sane-email-validation';

// Components
import MuiCard from './Card';
import Container from './Container';



const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'

    } else if (!isValidEmail(values.email)) {
        errors.email = 'Invalid Email'
    }
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.password1) {
      errors.password = 'Required'
    }
    if (!values.confirm) {
      errors.confirm = 'Required'
    }
    if (values.password1 !== values.confirm) {
      errors.confirm = 'Passwords do not match'
    }
    return errors
  }

  const createRenderer = render => ({ input, name, id, meta, error, errorMsg, ...rest }) =>
    <div
      className={[
        meta.error && meta.touched ? 'error' : '',
        meta.active ? 'active' : ''
      ].join(' ')}

    >

    {meta.error && meta.touched ? render(input, name, id, error = true, errorMsg = meta.error, rest) : 
      render(input, name, id, error = false, rest)}
      
    </div>
  
  const RenderInput = createRenderer((input, name = input.name, id, error, errorMsg) => {
    return error ? <TextField error required fullWidth {...input} id={id} label={name} color="primary"/> :
     <TextField required fullWidth {...input} id={id} label={name} color="primary"/>
  })
  
//   const RenderSelect = createRenderer((input, label, { children }) =>
//     <select {...input}>
//       {children}
//     </select>
//   )
  
  let SignupForm = (props, { handleSubmit, pristine, reset, submitting }) => {
  console.log(props)
  return (
  <Container>
      
      <MuiCard>
        <Typography color="inherit" gutterBottom>
          Signup Form
        </Typography>
        <form onSubmit={props.handleSignup}>
            <Field required component={RenderInput} name="username" id="username"  onChange={ props.handleInputChange }/>
            <Field required name="password" id="password1" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field required name="confirm" id="password2" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field required name="email" id="email" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field name="firstName" id="first_name" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field name="lastName" id="last_name" component={RenderInput} onChange={ props.handleInputChange }/>
        </form>
        <CardActions style={{justifyContent: 'center'}}>
            <Button type="button" disabled={submitting} color="primary" variant="contained">
                Submit
            </Button>
        </CardActions>
      </MuiCard>
  </Container>
  )}
  
    SignupForm = reduxForm({
    form: 'SignupForm',
    destroyOnUnmount: false,
    validate
  })(SignupForm)

export default (SignupForm);