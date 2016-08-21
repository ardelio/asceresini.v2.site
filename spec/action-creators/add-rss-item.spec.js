import { expect } from 'chai'
import { ADD_RSS_ITEM } from '../../app/react/redux-action-types'
import { AddRssItem } from '../../app/react/action-creators'

describe('AddRssItem', () => {
  it('returns an ADD_RSS_ITEM action', () => {
    const guid = 'guid'
    const title = 'title'
    const description = 'description'
    const url = 'http://test.com'

    expect(AddRssItem(guid, title, description, url)).to.eql({
      rssItem: {
        guid: 'guid',
        title: 'title',
        description: 'description',
        url: 'http://test.com'
      },
      type: ADD_RSS_ITEM
    })
  })
})
