
import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';
import { useField } from 'formik';



export default  function MyDatePicker({label,...props}){
    const [field, meta, helpers] = useField(props);
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
          <DatePicker
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




