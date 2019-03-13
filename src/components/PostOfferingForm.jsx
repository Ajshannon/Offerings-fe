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
import DropYourShitZone from '../components/DropShit';
import Content from './Content';

// Filestack
import ReactFilestack from 'filestack-react';

const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.description) {
      errors.description = 'Required'
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
  
 
  let PostOffering = (props, { submitting }) => {
  return (
  <Container>
      <MuiCard>

        <Content>
        <DropYourShitZone onDrop={props.onDrop}></DropYourShitZone>
        
        <form onSubmit={props.handlePost}>
            <Field name="title" id="title" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field name="address" id="address" component={RenderInput} onChange={ props.handleInputChange }/>
            <Field name="description" id="description" component={RenderInput} onChange={ props.handleInputChange }/>
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
  
    PostOffering = reduxForm({
    form: 'PostOffering',
    destroyOnUnmount: false,
    validate
  })(PostOffering)

export default (PostOffering);