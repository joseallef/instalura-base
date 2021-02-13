import styled, {css} from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from './../../foundation/Text/index';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';


const ButtonGhost = css`
    color: ${function(props){
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    background: transparent;
`;

const ButtonDefault = css`
    color: white;
    background-color: ${function(props){
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${function(props){
        return get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`;


export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: white;
    background-color: #D7385E;

    ${TextStyleVariantsMap.smallestException}

    ${function(props){
        // console.log('<Button>', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`))
        if(props.ghost) {
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


`;
 