import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="nome"
        value="Allef"
        onChange={() => {}}
        name="nome"
      />,
    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
            // error="O campo email é obrigatorio"
          />,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'devsoutinho@gmail.com');

        // console.log(onChangeMock.mock);

        expect(onChangeMock).toHaveBeenCalledTimes(21);
      });
    });
  });

  describe('when fiels is invalid', () => {
    // elemento tenha o span de texto
    // muda o CSS
    test('display the respectve error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="joseallef@gmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatorio"
        />,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('joseallef@gmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatorio');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
