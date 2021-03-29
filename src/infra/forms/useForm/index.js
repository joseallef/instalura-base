import React from 'react';

export default function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErros] = React.useState({
    usuario: 'Preencha ao menos 3 caracteres',
  });
  const [touched, setTouchedFields] = React.useState({});

  React.useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErros({});
      })
      .catch((err) => {
        const formatedErros = err.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;

          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});

        setErros(formatedErros);

        setIsFormDisabled(true);
      });
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      // ???
      setValues(() => ({
        ...values,
        [fieldName]: value,
      }));
    },
    // Validação do Form
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
