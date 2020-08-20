
import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { useField } from 'formik';



export default  function MyTimePicker({label,...props}){
    const [field, meta, helpers] = useField(props);
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
          <TimePicker
          size='small'
            fullWidth
            inputVariant='outlined'
            variant='dialog'
            margin="normal"
            label={label}
            value={meta.value}
            onChange={e=>helpers.setValue(e)}
            
          />
        
      </MuiPickersUtilsProvider>
    );
  }




