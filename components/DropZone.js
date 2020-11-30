import React, { useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  borderRadius: 8,
  borderWidth: 4,
  borderColor: '#dddddd',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const StyledDropzone = (props) => {
  const [currentFileName, setCurrentFileName] = useState('');

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length == 1) {
        const file = acceptedFiles[0];
        console.log(file);
        setCurrentFileName(file.name);
        if (props.onDropFile) {
          props.onDropFile(URL.createObjectURL(file));
        }
      }
    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div className={props.className || {}} style={props.style}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag here or click to browse for an image to test.</p>
      </div>
    </div>
  );
}

export default StyledDropzone;