export const CategoriesReducer = (state, { action, payload }) => {
  switch(action){
    case 'categories_get':
      return {
        ...state,
        categories: {
          ...state.categories,
          isFetching: true,
          isFetched: false
        }
      }

    case 'categories_set':
      return {
        ...state,
        categories: {
          list: payload,
          isFetching: false,
          isFetched: true
        }
      }

    default:
    case undefined:
      return state
  }
}

CategoriesReducer.key = 'categories'

CategoriesReducer.initialState = {
  list: [],
  isFetching: false,
  isFetched: false
}