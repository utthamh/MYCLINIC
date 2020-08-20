import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useField } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function FileInput({label,...props}) {
  const [field, meta, helpers] = useField(props);
  const classes = useStyles();
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={e=>{getBase64(e.target.files[0]).then(v=>helpers.setValue(v))}}
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" size='medium' component="span" fullWidth>
          Upload
        </Button>
      </label>
     
    </div>
  );
}
