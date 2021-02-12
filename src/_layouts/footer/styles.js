import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.brand};
  padding: ${({ theme }) => theme.spacing.xsmall};
  font-size: ${({ theme }) => theme.spacing.xsmall};
  text-align: center;
`