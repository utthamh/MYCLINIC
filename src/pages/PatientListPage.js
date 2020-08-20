import React, { useState, useEffect } from 'react'
import { Grid, Paper, AppBar, Typography, Toolbar } from '@material-ui/core'

import AddPatient from '../forms/AddPatient'
import PatientListTable from './PatientListTable'
export default function PatientListPage() {
    const [data,setData]=useState([])
    const [initial,setInitial]=useState({})
    useEffect(()=>{
        const v=localStorage.getItem('patientList')
        v && setData(JSON.parse(v))
    },[])
    return (
        <Grid container  spacing={2}>
            <Grid item sm={3} >
                <Paper elevation={3}>
                    <AppBar position='relative' style={{marginBottom:'20px'}} >
                        <Toolbar variant='dense'>
                        <Typography variant='h6'>Add Patient</Typography>
                        </Toolbar>
                        </AppBar>
                        <AddPatient data={data} initial={initial} setInitial={setInitial}  setData={setData}/>
                    </Paper>
                </Grid>
                <Grid item sm={9}>
                <Paper>
                    <PatientListTable data={data} initial={initial} setInitial={setInitial} setData={setData}/>
                    </Paper>
                </Grid>
        </Grid>
    )
}
