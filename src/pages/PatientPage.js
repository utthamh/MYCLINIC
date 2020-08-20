import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Grid } from '@material-ui/core'
import PatientProfile from '../components/PatientProfile'
import PatientContent from './PatientContent'
export default function PatientPage() {
    const {state}=useLocation()
    return (
        
      <Grid container spacing={3}>
          <Grid item sm={3} >
              <PatientProfile state={state}/>
              </Grid>
              <Grid item sm={9} >
              <PatientContent />
              </Grid>
          </Grid>
        
    )
}
