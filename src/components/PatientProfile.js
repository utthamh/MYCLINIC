import React from 'react'
import { Avatar, Paper, Typography, Divider, ListItemText, List, ListItem } from '@material-ui/core'

export default function PatientProfile({state}) {
    return (
        <Paper style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'center'}}>
           <Avatar style={{height:100,width:100}} alt="Remy Sharp" src={state.patientPhoto} />
           <div style={{height:'100%',width:'100%'}}>
           <List component="nav"  aria-label="mailbox folders">
  
  <ListItem button >
    <ListItemText primary='Name   :' />
    <ListItemText style={{color:'#c0c0c0',fontSize:'9px !important'}} primary={state.patientName} />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary='Phone    :' />
    <ListItemText style={{color:'#c0c0c0',fontSize:'9px !important'}} primary={state.phoneNumber} />
  </ListItem>
  <ListItem button >
    <ListItemText primary='Address :'  />
  </ListItem>
  <ListItem button >
    <ListItemText style={{wordWrap:'break-word',color:'#c0c0c0',fontSize:'9px !important'}} primary={'skjsbcjkdsbckjdscbdskjbckjdabckjdsbckjdsbckjsdbckjsadbckjdbckjc'} />
  </ListItem>
  
  </List>
</div>
        </Paper>
    )
}
