import { render } from '@testing-library/react'
import { AppContext } from '_container/context'
import { ThemeProvider } from 'styled-components'
import { theme } from '_layouts/theme'

import { JokeCard } from './joke-card'

const renderWithprovider = ({
  contextValue,
  props
}) =>
  render(
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextValue}>
        <JokeCard {...props} />
      </AppContext.Provider>
    </ThemeProvider>
  )

describe('COMPONENT: Retention: Joke card', () => {
  it('Should render joke value', () => {
    const { getByText } = renderWithprovider({
      contextValue: [{}, jest.fn()],
      props: {
        visibility: { get: jest.fn(), set: jest.fn() },
        joke: {
          value: 'MOCK_JOKE_VALUE'
        }
      }
    })
    
    
    expect(getByText('MOCK_JOKE_VALUE')).toBeInTheDocument()
  })
})