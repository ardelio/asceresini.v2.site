import { expect } from 'chai'
import { ADD_RSS_ITEM } from '../../app/react/redux-action-types'
import addRssItem from '../../app/react/action-creators/add-rss-item'

describe('addRssItem', () => {
  it('returns an ADD_RSS_ITEM action', () => {
    const guid = 'guid'
    const title = 'title'
    const description = 'description'

    expect(addRssItem(guid, title, description)).to.eql({
      rssItem: {
        guid: 'guid',
        title: 'title',
        description: 'description'
      },
      type: ADD_RSS_ITEM
    })
  })
})
