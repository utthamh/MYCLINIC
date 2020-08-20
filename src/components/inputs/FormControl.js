import React from 'react'
import MyDatePicker from './DatePicker'
import MyTimePicker from './TimePicker'
import MyCamera from './Camera'
import FileInput from './FileInput'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import RadioInput from './RadioInput'
import CheckboxInput from './CheckboxInput'

export default function FormControl({type,...props}) {
    switch(type){
        case 'date':return <MyDatePicker {...props}/>
        case 'time':return <MyTimePicker {...props}/>
        case 'camera':return <MyCamera {...props}/>
        case 'file':return <FileInput {...props}/>
        case 'select':return <SelectInput {...props}/>
        case 'radio':return <RadioInput {...props}/>
        case 'checkbox':return <CheckboxInput {...props}/>
        default :return <TextInput {...props}/>
    }
}
