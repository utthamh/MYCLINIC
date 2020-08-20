import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useField } from 'formik';


export default function SelectInput({label,myvalue,mylabel,options,...props}) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormControl size='small' variant="outlined"  error={meta.touched && meta.error} fullWidth>
        <InputLabel >{label}</InputLabel>
        <Select
          
          
          
          {...field}
          {...props}
          label={label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          {(mylabel && myvalue && options && Array.isArray(options) && options.map(item=><MenuItem value={item[myvalue]}>{item[mylabel]}</MenuItem>))
          ||
          options && Array.isArray(options) && options.map(item=><MenuItem value={item.value}>{item.label }</MenuItem>)
          }
          
          
        </Select>
        <FormHelperText>{meta.error}</FormHelperText>
      </FormControl>
    )
}
