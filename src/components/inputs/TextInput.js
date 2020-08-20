import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

export default function TextInput(props) {
    const [field, meta, helpers] = useField(props);
    return (
        <TextField
        InputLabelProps={{
          shrink: true,
        }}
        size='small'
        variant="outlined"
          fullWidth
          error={meta.touched && meta.error}
          helperText={meta.error}
          {...field}
          {...props}
        />
    )
}
