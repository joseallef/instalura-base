import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text/index';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
    background: transparent;
`;

const ButtonDefault = css`
  color: white;
    background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
    color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;

const ButtonWapper = styled.button`
  border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: white;
    background-color: #D7385E;

    ${TextStyleVariantsMap.smallestException}

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
     opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
        ${TextStyleVariantsMap.paragraph1}
        `,
  })}

    &:disabled {
        cursor: not-allowed;
        opacity: .2;
    }
    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
    `};
    ${propToStyle('margin')}
    ${propToStyle('display')}
`;


export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href)
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWapper 
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWapper>
  )
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};