import styled from 'styled-components'

export const Card = styled.article`
  background: #FFF;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
`

export const Joke = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5em;
  line-height: 1.5em;
`