import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.ui.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.spacing.xxsmall};
  text-transform: uppercase;
  text-align: center;
  width: 180px;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`

export const Options = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`

export const Option = styled.div`
  border: 
    1px
    solid
    ${({ theme }) => theme.colors.brand};
    border-radius: 2px;
  color: ${({ theme }) => theme.colors.brand};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: ${({ theme }) => theme.spacing.xxlarge};
  height: ${({ theme }) => theme.spacing.xxlarge};

  ${({ selected }) => selected && css`
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.ui.background};
  `}
`
