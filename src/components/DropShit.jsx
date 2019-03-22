import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

// ReactDropzone
import {useDropzone} from 'react-dropzone';

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

let DropYourShitZone = (props) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      let preview = URL.createObjectURL(acceptedFiles[0])
      props.onDrop(acceptedFiles, preview);
    }
  });
  
    {props.preview ? console.log(props.preview) : console.log("no image")}
      return (<div>
        {props.preview !== "" ? 
          <DropzoneInput >
          {() => (
            <ImageDrop {...getRootProps()}>
                <img src={props.preview}></img>
                <MaterialIcon icon='insert_photo'/>
                <input className='icon' {...getInputProps()} />
            </ImageDrop> 
          )}
          </DropzoneInput>: <img src={props.preview}></img>
          }
          </div>
      )}

export default DropYourShitZone