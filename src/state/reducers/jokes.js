export const JokesReducer = (state, { action, payload }) => {
  switch(action){
    case 'joke_get':
      return {
        ...state,
        joke: {
          ...state.joke,
          isFetching: true,
          data: null
        }
      }

    case 'joke_set':
      return {
        ...state,
        joke: {
          ...state.joke,
          isFetching: false,
          data: payload
        }
      }

    case 'joke_clear':
      return {
        ...state,
        joke: {
          ...state.joke,
          isFetching: false,
          data: null
        }
      }

    default:
    case undefined:
      return state
  }
}

JokesReducer.key = 'joke'

JokesReducer.initialState = {
  isFetching: false,
  data: null
}