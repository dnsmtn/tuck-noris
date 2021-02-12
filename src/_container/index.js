import { useReducer } from 'react'
import { node } from 'prop-types'

import { AppContext } from './context'
import { Reducer } from 'state'

export const Container = ({ children }) => {
  return (
    <>
      <AppContext.Provider value={useReducer(Reducer, Reducer.initialState)}>
        {children}
      </AppContext.Provider>
    </>
  )
}

Container.propTypes = {
  children: node.isRequired
}