import styled, { css } from "styled-components";
import { TextStyleVariants } from "../../../foundation/layout/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

export const CabecalhoWrapper = styled.nav`
border-top: 2px solid #E9C46A; 
position: absolute;
width: 1440px;
height: 67px;
left: 0px;
top: 800px;

background: #FFF8E6;
`;
CabecalhoWrapper.NavBar = styled.div`
padding: 270px;
margin-right: 250;
right: 270px;
display: flex;
justify-content: center;
margin-top: 0;

${breakpointsMedia({
    md: css `
      order: initial;
    `,
  })}
  ul {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #000000;
    transition: 200ms ease-in-out;

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallException}
    `,
    md: css`
      ${TextStyleVariants.textNavBar}
    `,
  })}
    &:hover,
    &:focus {
        font-weight: 500;
        color: #000000;
    }
}
`