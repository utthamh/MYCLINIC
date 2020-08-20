import React from 'react'

import { Form, Formik } from 'formik';

export default function MyForm({initialValues,children}) {
    return (
        <Formik
       initialValues={initialValues}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(props) => (
         <Form>
           {children}
         </Form>
       )}
     </Formik>
    )
}
