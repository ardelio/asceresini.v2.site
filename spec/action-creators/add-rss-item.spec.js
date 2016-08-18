import { expect } from 'chai'
import { ADD_RSS_ITEM } from '../../app/react/redux-action-types'
import { AddRssItem } from '../../app/react/action-creators'

describe('AddRssItem', () => {
  it('returns an ADD_RSS_ITEM action', () => {
    const guid = 'guid'
    const title = 'title'
    const description = 'description'

    expect(AddRssItem(guid, title, description)).to.eql({
      rssItem: {
        guid: 'guid',
        title: 'title',
        description: 'description'
      },
      type: ADD_RSS_ITEM
    })
  })
})
