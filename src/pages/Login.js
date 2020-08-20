import React from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import MyForm from '../components/inputs/Form'
import FormControl from '../components/inputs/FormControl'

export default function Login() {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',minWidth:'100vw'}}>
            <Paper style={{padding:'15px'}} elevation={6}>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <MyForm initialValues={{userName:'',password:''}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl type='text' label='User Name' name='userName'/>
                            </Grid>
                            <Grid item xs={12}>
                            <FormControl type='password' label='Password' name='password'/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant='contained' size='medium' fullWidth color='primary'>Login</Button>
                        </Grid>
                        </Grid>
                 </MyForm>   
            </Paper>
        </div>
    )
}
