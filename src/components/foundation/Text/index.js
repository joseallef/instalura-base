import React from 'react';
import PropTypes from 'prop-types';
import  styled, { css } from 'styled-components';


export const TextStyleVariantsMap = {
    paragraphh1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraphh1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraphh1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraphh1.lineHeight}
    
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
}



const TextBase = styled.span`
cursor: pointer;
if(props.variant === 'smallestException'){
            ${function(props){
                console.log('props', props.variant);
            return TextStyleVariantsMap[props.variant];
        }

    }}

 
`;

export default function Text({ tag, variant, children }) {

    return (
        <TextBase as={tag} variant={variant}>
            {children}
        </TextBase>
    );
}

Text.protoTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
 

Text.defaultProps = {
    tag: 'span',
    variant: 'paragrah1',
}