export const SettingsReducer = (state, { action, payload }) => {
  switch(action){
    case 'category_set':
      return {
        ...state,
        settings: {
          ...state.settings,
          category: payload
        }
      }

      default:
      case undefined:
        return state
  }
}

SettingsReducer.key = 'settings'

SettingsReducer.initialState = {
  category: ''
}