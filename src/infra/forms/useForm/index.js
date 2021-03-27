import React from 'react';

export default function useForm({ initialValues, onSubmit }) {
    const [values, setValues] = React.useState(initialValues); 
    return {
      values,
      handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        onSubmit(values);
      },
      handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        const { value } = event.target;
        console.log('fieldName', fieldName, value)
        // ???
        setValues(() =>{
          return {
              ...values,
              [fieldName]: value,
          }
        });
      },
    };
  }