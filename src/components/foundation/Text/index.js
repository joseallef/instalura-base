import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {propToStyle} from './../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Link from '../../commns/Link';

export const TextStyleVariantsMap = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
        
    `,
    title: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.titleXS.fontSize};
            font-weight: ${theme.typographyVariants.titleXS.fontWeight};
            line-height: ${theme.typographyVariants.titleXS.lineHeight};
        `}
        ${breakpointsMedia({
        md: css`
            ${({ theme }) => css`
            font-size: ${theme.typographyVariants.title.fontSize};
            font-weight: ${theme.typographyVariants.title.fontWeight};
            line-height: ${theme.typographyVariants.title.lineHeight};
            `}
        `,
    })}
  `,
}


const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
`;

// eslint-disable-next-line react/prop-types
export default function Text({ tag, variant, children, href, ...props }) {
    if(href) {

        return (
            <TextBase
                as={Link}
                href={href}
                variant={variant}
                {...props}
            >
                {children}
            </TextBase>
        )
    }
    return (
        <TextBase as={tag} href={href} variant={variant} {...props}>
            {children}
        </TextBase>
    );
}

Text.protoTypes = {
    tag: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node,
} 

Text.defaultProps = {
    tag: 'span',
    variant: 'paragrah1',
    children: null,
    href: '',
}