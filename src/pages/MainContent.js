import React from 'react'
import { Typography } from '@material-ui/core'
import { Route } from 'react-router-dom'
import PatientListPage from './PatientListPage'
import PatientPage from './PatientPage'

export default function MainContent() {
    return (
        <>
        <Route path='/dashboard/patientList' component={PatientListPage}/>
        <Route path='/dashboard/patient/:id' component={PatientPage}/>
        </>
    )
}
