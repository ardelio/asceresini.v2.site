import { ADD_RSS_ITEM } from '../redux-action-types'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RSS_ITEM:
      return {
        ...state,
        items: [...state.items, action.rssItem]
      }
    default:
      return state
  }
}
