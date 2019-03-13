import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';

import { reduxForm, Field } from 'redux-form';

// Components
import MuiCard from './Card';
import Container from './Container';
import Content from './Content';


const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
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
  
  let SigninForm = (props, { handleSubmit, pristine, reset, submitting }) => {
  return (
  <Container>
      
      <MuiCard>
        <Content>
        <Typography color="inherit" gutterBottom>
          Login
        </Typography>
        <form onSubmit={props.handleLogin}>
            <Field required component={RenderInput} name="username" id="username"  onChange={ props.handleInputChange }/>
            <Field required name="password" id="password" component={RenderInput} onChange={ props.handleInputChange }/>
        </form>
        <CardActions style={{justifyContent: 'center'}}>
            <Button type="button" disabled={submitting} onClick={props.handleLogin} color="primary" variant="contained">
                Submit
            </Button>
        </CardActions>
        </Content>
      </MuiCard>
  </Container>
  )}
  
    SigninForm = reduxForm({
    form: 'SigninForm',
    destroyOnUnmount: false,
    validate
  })(SigninForm)

export default (SigninForm);