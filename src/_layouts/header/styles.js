import styled from 'styled-components'

import svgLogo from '_assets/logo.svg'
import iconSearch from '_assets/icons/search.svg'

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: url(${svgLogo});
`

export const Search = styled.div`
  width: 16px;
  height: 16px;
  background: url(${iconSearch});
  background-size: cover;
`

export const Wrapper = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.spacing.xxlarge};
  background: ${({ theme }) => theme.colors.brand};
  display: flex;
  justify-content: space-between;
  align-items: center;
`