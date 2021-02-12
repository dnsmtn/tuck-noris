import { node } from 'prop-types'

import { GlobalStyles } from './global.styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import { Header } from './header'
import { Footer } from './footer'

import {
  Wrapper,
  Content
} from './public.styles'

export const PublicLayout = ({ 
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>
          { children }
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

PublicLayout.propTypes = {
  children: node.isRequired
}
