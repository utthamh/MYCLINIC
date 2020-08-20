import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { useField } from 'formik';

export default function RadioInput({label,options,...props}) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormControl size='small' component='fieldset' fullWidth>
            <FormLabel color='secondary' component='legend'>{label}</FormLabel>
            <RadioGroup {...field} {...props}>
                {options && options.map(item=><FormControlLabel control={<Radio/>} {...item}/>)}
                </RadioGroup>
        </FormControl>
    )
}
