import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { propToStyle} from '../../../theme/utils/propToStyle'
import PropTypes from 'prop-types'
import theme from '../../../theme'
import { typographyVariants } from '../../../theme/typographyVariants'


const textNavB = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.textNavB.fontSize};
    font-weight: ${theme.typographyVariants.textNavB.fontWeight};
    line-height: ${theme.typographyVariants.textNavB.lineHeight};
  `}
`;

const smallExcept = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallExcept.fontSize};
    font-weight: ${theme.typographyVariants.smallExcept.fontWeight};
    line-height: ${theme.typographyVariants.smallExcept.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallExcept,
  textNavB,
};

const TextBase = styled.span`

  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'textNavBar',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['textNavBar', 'smallestException']),
};