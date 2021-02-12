import { render } from '@testing-library/react'
import { AppContext } from '_container/context'
import { ThemeProvider } from 'styled-components'
import { theme } from '_layouts/theme'

import { getJoke } from 'services/jokes.service'
import { Home } from './home'

jest.mock('services/jokes.service')

const renderWithprovider = ({
  contextValue
}) =>
  render(
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextValue}>
        <Home />
      </AppContext.Provider>
    </ThemeProvider>
  )

describe('COMPONENT: Home', () => {
  it('Should fetch joke with context category', () => {
    renderWithprovider({
      contextValue: [{ joke: {}, settings: { category: 'MOCK_CATEGORY' } }, jest.fn()],
      Component: Home
    })

    expect(getJoke).toHaveBeenCalledWith('MOCK_CATEGORY')
  })
})