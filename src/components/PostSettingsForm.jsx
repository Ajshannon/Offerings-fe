// React 
import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';

import { reduxForm, Field } from 'redux-form';

// Components
import MuiCard from './Card';
import Container from './Container';

// React DropZone
import DropYourShitZone from './DropShit';
import Content from './Content';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.phone_number) {
      errors.title = 'Required'
    }
    if (!values.image) {
      errors.image = 'Required'
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
  
  // const ImageDrop = styled.div`
  //   width: 100%;
  //   height: 30vh;
  //   max-width: 400px;
  //   background: #F5F5F5;
  //   align-items: center;
  //   overflow: hidden;
  // `
  let PostSettingsform = (props, { submitting }) => {
  return (
  <Container>
      <MuiCard>
        <Content>
        <DropYourShitZone onDrop={props.onDrop} preview={props.preview? props.preview: null}></DropYourShitZone>
        
        <form onSubmit={props.handlePost}>
          <Field name="first name" id="first_name" component={RenderInput} onChange={ props.handleInputChange }/>
          <Field name="last name" id="last_name" component={RenderInput} onChange={ props.handleInputChange }/>
          <Field name="phone number" id="phone_number" component={RenderInput} onChange={ props.handleInputChange }/>
          <Field name="password" id="password" component={RenderInput} onChange={ props.handleInputChange }/>
        </form>
        <CardActions style={{justifyContent: 'center'}}>
            <Button type="button" disabled={submitting} onClick={props.handlePost} color="primary" variant="contained">
                Submit
            </Button>
        </CardActions>
      </Content>
      </MuiCard>
  </Container>
  )}
  
    PostSettingsform = reduxForm({
    form: 'PostSettingsForm',
    destroyOnUnmount: false,
    validate
  })(PostSettingsform)

export default (PostSettingsform);