import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { IconButton, Modal, Paper, Button } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useField } from 'formik';
export default function MyCamera({label,...props}) {
    const [field, meta, helpers] = useField(props);
    const [open,setOpen]=useState(false)
    const videoConstraints = {
        width: 300,
        height: 300,
        facingMode: "user"
      };
var cam=useRef(null)
const capture = React.useCallback(
    () => {
      const imageSrc = cam.current.getScreenshot();
      helpers.setValue(imageSrc)
      setOpen(false)
    },
    [cam]
  );

    return (
        <>
        
                <Button variant="outlined" size='medium' component="span" fullWidth onClick={()=>setOpen(true)}>
          Camera
        </Button>
        <Modal open={open} onClose={()=>setOpen(false)}  style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Webcam
        audio={false}
        ref={cam}
        height={300}
        width={300}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <Button color='primary' variant='contained' onClick={capture}>Capture photo</Button>
        </div>
        </Modal>
        </>
    )
}
