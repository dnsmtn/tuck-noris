import styled from 'styled-components'

export const Wrapper = styled.div``

export const Disclaimer = styled.div`
  color: ${({ theme }) => theme.colors.ui.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.spacing.xxsmall};
  text-transform: uppercase;
  text-align: center;
  width: 130px;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`
