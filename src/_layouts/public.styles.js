import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text_primary};
  background: ${({ theme }) => theme.colors.ui.background};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100% - ${({ theme }) => theme.spacing.xxlarge} - ${({ theme }) => theme.spacing.large});
  padding: ${({ theme }) => theme.spacing.xsmall};
  overflow-y: scroll;
`
