import { expect } from 'chai'
import rssFeedReducer from '../../app/react/reducers/rss-feed-reducer'
import { ADD_RSS_ITEM } from '../../app/react/redux-action-types'

describe('rssFeedReducer', () => {
  it('returns the state untouched when no match', () => {
    const state = {
      items: [
        { id: 1 }
      ]
    }
    const action = {
      type: 'aRandomTypeThatWontExist'
    }
    expect(rssFeedReducer(state, action)).to.eql({
      items: [
        { id: 1 }
      ]
    })
  })

  it('adds a rssItem to the state', () => {
    const state = {
      items: [
        { id: 1 }
      ]
    }
    const action = {
      type: ADD_RSS_ITEM,
      rssItem: { id: 2 }
    }
    expect(rssFeedReducer(state, action)).to.eql({
      items: [
        { id: 1 },
        { id: 2 }
      ]
    })
  })
})
