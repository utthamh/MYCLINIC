import React, { useEffect, useState } from 'react'

import FormControl from '../components/inputs/FormControl'
import { Button, ButtonGroup } from '@material-ui/core'
import { Formik, Form } from 'formik'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import PublishIcon from '@material-ui/icons/Publish';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

export default function AddPatient(props) {
    const [val,setVal]=useState({patientPhoto:''})


    useEffect(()=>{props.initial && setVal(props.initial)})
    return (
                <Formik
                enableReinitialize={true}
                initialValues={val}
                onSubmit={(values, {resetForm}) => {
                  setTimeout(() => {

                    localStorage.setItem('patientList',JSON.stringify([...props.data,values]));
                    props.setData(v=>[...v,values])
                    
                    
                  }, 1000);
                  resetForm()
                }}
              >
                {(props) => (
                  <Form>
                    <Box color='primary' p={2} >Patient Photo</Box>
          <Box display='flex' mb={2} style={{justifyContent:'space-around',alignItems:'center'}}>
          <Avatar style={{height:100,width:100}} alt="Remy Sharp" src={props.values.patientPhoto} />
         <ButtonGroup
        orientation="vertical"
        
        aria-label="vertical  primary button group"
      >
        <FormControl type='file' name='patientPhoto' label='Photo'/>
               <FormControl type='camera' name='patientPhoto' label='Photo'/>
      </ButtonGroup>
          </Box>
                    <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <FormControl type='text' label='Patient Name' name='patientName'/> 
           </div>
           <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <FormControl type='text' label='Gardian Name' name='gardianName'/> 
           </div>
           <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <FormControl type='text' label="Phone Number" name='phoneNumber'/> 
           </div>
           <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <FormControl type='text' label="Alternate Number" name='alternateNumber'/> 
           </div>
           <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <FormControl type='text' multiline rows={4} label="Address" name='address'/> 
           </div>
           
           <div style={{padding:'4px 15px',marginBottom:'15px'}}>
           <Button type='submit' fullWidth color='primary' variant='contained' style={{marginBottom:'20px'}}>Submit</Button>
           </div>
                  </Form>
                )}
              </Formik>
         
    )
}
