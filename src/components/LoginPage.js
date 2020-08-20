import React from 'react'
import { Paper,Link, makeStyles, Grid, Checkbox, FormControlLabel, TextField, Avatar, CssBaseline, Container ,Button,Typography, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoginBg from '../images/LoginBg.jfif'
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding:theme.spacing(8),
      backgroundImage:`url(${LoginBg})`,
      backgroundPosition:'center',
      backgroundSize:'cover'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function LoginPage() {
    const classes = useStyles();
    const history=useHistory();
    return (
        
             <Container  maxWidth="sm">
      <CssBaseline />
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e)=>{e.preventDefault();history.push('/dashboard')}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
           
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControl fullWidth variant="outlined" >
        <InputLabel id="role">Role</InputLabel>
          <Select labelId='role'  label='Select Role' placeholder='Select Role'>
              <MenuItem>Admin</MenuItem>
              <MenuItem>Receptionist</MenuItem>
              </Select>
              </FormControl>
          <Button
            type="submit"
            fullWidth
            size='medium'
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </Paper>
     
    </Container>

     
    )
}
