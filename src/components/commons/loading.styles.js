import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  ${({theme}) => css`
    width: ${theme.spacing.xxlarge};
    height: ${theme.spacing.xxlarge};
    position: absolute;
    top: calc(50% - ${parseInt(theme.spacing.xxlarge) / 2}px);
    left: calc(50% - ${parseInt(theme.spacing.xxlarge) / 2}px);

    border: 
      ${theme.spacing.xxsmall}
      ${theme.colors.brand}
      solid
      ;
    border-right: 0px;
    border-bottom: 0px;
    border-radius: 100%;

    animation-name: spin;
    animation-duration: .5s;
    animation-iteration-count: infinite;
  `}
`
