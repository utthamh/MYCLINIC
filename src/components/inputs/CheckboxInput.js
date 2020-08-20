import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@material-ui/core'
import { useField } from 'formik';

export default function CheckboxInput({label,options,...props}) {
    const [field, meta, helpers] = useField(props);
    const setvalue=(v)=>{
        if([...meta.value].includes(v)){
           helpers.setValue([...meta.value].filter(a=>a!=v))
        }
        else{
            helpers.setValue([...meta.value,v])
        }
    }
    return (
        <FormControl component='fieldset' size='small' fullWidth>
            <FormLabel color='secondary' component='legend'>{label}</FormLabel>
            <FormGroup {...field} {...props} onChange={e=>setvalue(e.target.value)}>
                {options && options.map(item=><FormControlLabel control={<Checkbox />} {...item}/>)}
                </FormGroup>
        </FormControl>
    )
}
