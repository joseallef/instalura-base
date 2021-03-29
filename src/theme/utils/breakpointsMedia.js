import { css } from 'styled-components';
import theme from '../index';

// eslint-disable-next-line import/no-named-as-default-member
const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => css`
    @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
      ${cssByBreakpoints[breakpointsName]}
    }
  `);
}
