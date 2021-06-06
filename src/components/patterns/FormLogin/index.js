import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import useForm from '../../../infra/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup.string().required('"Usuario" é obrigatório!').min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup.string().required('"Senha" é obrigatória').min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

// eslint-disable-next-line react/prop-types
export default function LoginForm({ onSubmit }) {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  // console.log(
  //   'LoginSchema',
  //   loginSchema.validate(
  //     {
  //       usuario: '',
  //       senha: '',
  //     },
  //     { abortEarly: false },
  //   )
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.error(err.inner);
  //     }),
  // );

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        // DTO  data transfer objete
        username: values.usuario, // 'joseallef'
        password: values.senha, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/fead');
        })
        .catch((error) => {
          // Desafio : mostrar o erro na tela
          // eslint-disable-next-line no-console
          console.log(error);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}