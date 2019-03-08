import React from 'react'
// import { useDropzone } from 'react-dropzone'
import Dropzone from 'react-dropzone'

export default class DropYourShitZone extends React.Component {

  render() {
      return (
          <Dropzone onDrop={acceptedFiles => this.props.onDrop(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
              <section>
              <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              </section>
          )}
          </Dropzone>
      )}}