export const LikesReducer = (state, { action, payload }) => {
  switch(action){
    case 'likes_load':
      return {
        ...state,
        likes: {
          ...state.likes,
          list: payload || [],
          isFetched: true
        }
      }

    case 'likes_add':
      return {
        ...state,
        likes: {
          ...state.likes,
          list: [ ...state.likes.list, payload],
        }
      }

    case 'likes_remove':
      return {
        ...state,
        likes: {
          ...state.likes,
          list: state.likes.list.filter(joke => joke.id !== payload.id),
        }
      }

    default:
    case undefined:
      return state
  }
}

LikesReducer.key = 'likes'

LikesReducer.initialState = {
  list: [],
  isFetched: false
}