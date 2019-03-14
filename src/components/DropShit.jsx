import React from 'react'
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const DropzoneInput = styled(Dropzone)`
background-color: ;
&:hover {
    cursor: alias;
}
@media (min-width: 600px) {
    width: 100%;
    }
`
const ImageDrop = styled.div`
    
    display: flex;
    background: #F5F5F5;
    width: 40vw;
    max-width: 350px;
    height: 40vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;

`

function MaterialIcon(props) {
    return (
      <i className='material-icons' margin='18vw'>
        {props.icon}
      </i>
    )
  }

export default class DropYourShitZone extends React.Component {
  
  render() {
    {this.props.preview ? console.log(this.props.preview) : console.log("no image")}
    console.log(this.props)
      return (<div>
        {this.props.preview !== "" ? 
          <DropzoneInput onDrop={acceptedFiles => this.props.onDrop(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
            <ImageDrop {...getRootProps()}>
              
                <MaterialIcon icon='insert_photo'/>
                <input className='icon' {...getInputProps()} />
            </ImageDrop> 
          )}
          </DropzoneInput>: <div></div>
          }
          </div>
      )}}