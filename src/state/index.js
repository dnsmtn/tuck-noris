import * as ReducersList from './reducers'

const ReducerKeys = Object.keys(ReducersList)

const initialState = ReducerKeys.reduce((acc, cur) => {
  const CurrentReducer = ReducersList[cur]
  return { ...acc, [CurrentReducer.key]: CurrentReducer.initialState }
}, {})

export const Reducer = (state, action) =>
  ReducerKeys.reduce((acc, cur) => {
    const CurrentReducer = ReducersList[cur]
    return CurrentReducer(acc, action)
  }, state)

Reducer.initialState = initialState