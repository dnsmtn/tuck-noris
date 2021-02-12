import styled, { css } from 'styled-components'

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Option = styled.div`
  width: ${({ theme }) => theme.spacing.xxlarge};
  height: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: 100%;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${({ secondary }) => secondary && css`
    width: ${({ theme }) => theme.spacing.large};
    height: ${({ theme }) => theme.spacing.large};
  `}

  img {
    max-width: 50%;
    max-height: 50%;
  }
`