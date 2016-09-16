import { expect } from 'chai'
import Reducers from '../../../app/react/reducers'
import { ADD_RSS_ITEM } from '../../../app/react/redux-action-types'

const { rssFeed } = Reducers

describe('RssFeedReducer', () => {
  it('returns the state untouched when no match', () => {
    const state = {
      items: [
        { id: 1 }
      ]
    }
    const action = {
      type: 'aRandomTypeThatWontExist'
    }
    expect(rssFeed(state, action)).to.eql({
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
    expect(rssFeed(state, action)).to.eql({
      items: [
        { id: 1 },
        { id: 2 }
      ]
    })
  })
})
