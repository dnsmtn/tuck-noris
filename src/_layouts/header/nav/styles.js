import styled, { css } from 'styled-components'

import Logo from '_assets/logo.svg'
import iconLike from '_assets/icons/like.svg'
import iconSettings from '_assets/icons/settings.svg'

const RouterLink = styled.div`
  & > a {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0;
  }
`

export const Jokes = styled(RouterLink)`
  width: ${({ theme }) => theme.spacing.xxlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  background-repeat: no-repeat;
  background-image: url(${Logo});
  background-position: center center;
`

export const Likes = styled(RouterLink)`
  width: ${({ theme }) => theme.spacing.xxlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  background-repeat: no-repeat;
  background-image: url(${iconLike});
  background-position: center center;
  background-size: 60%;
  position: relative;

  &:after {
    content: '${({ amount }) => amount <= 9 ? amount : '9+' }';
    display: ${({ amount }) => amount ? 'block' : 'none'};
    border-radius: 100%;
    width: ${({ theme }) => theme.spacing.small};
    height: ${({ theme }) => theme.spacing.small};
    background: ${({ theme }) => theme.colors.ui.primary};
    color: ${({ theme }) => theme.colors.brand};
    position: absolute;
    top: 0;
    left: calc(100% - (${({ theme }) => theme.spacing.small} / 2));
    text-align: center;
    line-height: ${({ theme }) => theme.spacing.small};
  }
`

export const Categories = styled(RouterLink)`
  width: ${({ theme }) => theme.spacing.xxlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  background-repeat: no-repeat;
  background-image: url(${iconSettings});
  background-position: center center;
  background-size: 60%;
`

export const Wrapper = styled.nav`
  width: 100%;
  max-width: 200px;
  margin: auto;
  height: ${({ theme }) => theme.spacing.xxlarge};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Jokes},
  ${Likes},
  ${Categories} {
    opacity: .5;
  }

  ${({ active }) => {
    switch(active){
      default:
        case '/':
          return css`
            ${Jokes} { opacity: 1; }
          `
        case '/likes':
          return css`
            ${Likes} { opacity: 1; }
          `
        case '/settings':
          return css`
            ${Categories} { opacity: 1; }
          `
    }
  }}
`
