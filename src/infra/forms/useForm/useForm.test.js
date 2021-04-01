import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './index';

describe('useForm()', () => {
  describe('whe user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Mario',
        },
      }));
      const inicialValues = { nome: 'Mario' };
      expect(result.current.values).toEqual(inicialValues);

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Allef',
        },
      };

      act(() => {
        result.current.handleChange(event);
      });
      // expert, to be a new value

      expect(result.current.values).toEqual({ nome: 'Allef' });
    });
  });
});
