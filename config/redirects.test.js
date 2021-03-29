import redirects from './redirects';

// Test Driven Development
describe('config/redirects', () => {
  test('reders all courrent redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
