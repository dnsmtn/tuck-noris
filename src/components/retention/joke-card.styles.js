import styled, { css } from 'styled-components'

export const Card = styled.section`
  background: #FFF;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  ${({ isOpen }) => isOpen && css`
    ${Joke} {
      overflow: visible;
      white-space: normal;
      margin-bottom: ${({ theme }) => theme.spacing.xsmall};
    }

    ${Dislike} {
      display: block;
    }
  `}
`

export const Joke = styled.article`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.text.decondary};
  line-height: ${({ theme }) => theme.spacing.normal};
`

export const Dislike = styled.button`
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.support.error};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 900;
  padding: 0;
  display: none;
`
