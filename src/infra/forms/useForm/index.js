import React from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;

    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export default function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErros] = React.useState({
    usuario: 'Preencha ao menos 3 caracteres',
  });
  const [touched, setTouchedFields] = React.useState({});

  async function validateValues(currenValues) {
    try {
      await validateSchema(currenValues);
      setErros({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErros = formatErrors(err.inner);

      setErros(formatedErros);

      setIsFormDisabled(true);
    }
  }
  React.useEffect(() => {
    validateValues(values)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    // validateSchema(values)
    //   .then(() => {
    //     setIsFormDisabled(false);
    //     setErros({});
    //   })
    // .catch((err) => {
    //   const formatedErros = err.inner.reduce((errorObjectAcc, currentError) => {
    //     const fieldName = currentError.path;
    //     const errorMessage = currentError.message;

    //     return {
    //       ...errorObjectAcc,
    //       [fieldName]: errorMessage,
    //     };
    //   }, {});

    //   setErros(formatedErros);

    //   setIsFormDisabled(true);
    // });
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
