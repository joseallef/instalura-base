/* eslint-disable no-console */
import { propToStyle } from './index';

describe('propToStyle()', () => {
  describe('whe receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' }; // tring
      console.log('propToStyleResult', propToStyleResult(componentProps));
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a numbe', () => {
      const propToStyleResult = propToStyle('flex');
      // <Text flex={1} />
      const componentProps = { flex: 1 }; // number
      console.log('propToStyleResult', propToStyleResult(componentProps));
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });
  describe('whe receives an argument with breakpoints', () => {
    test('renders only one breackpoits resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } }; // tring
      console.log('propToStyleResult', propToStyleResult(componentProps));
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
    test('renders two on more breackpoit resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }; // tring
      console.log('propToStyleResult', propToStyleResult(componentProps));
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
  // eslint-disable-next-line jest/no-commented-out-tests
  // test('...', () => {
  //   const propToStyleResult = propToStyle('textAlign');

  //   // <Text textAlign="center" />
  //   const componentProps = { textAlign: 'center' }; // Number || string
  //   console.log('propToStyleResult', propToStyleResult(componentProps));
  //   const styleResult = propToStyleResult(componentProps);

  //   expect(styleResult).toEqual({ textAlign: 'center' });
  // });
});
