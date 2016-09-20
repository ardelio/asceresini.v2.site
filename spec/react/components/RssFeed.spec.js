import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { RssFeed } from '../../../app/react/components/RssFeed.js'

describe('<RssFeed />', () => {
  let wrapper = null

  beforeEach(() => {
    const rssItems = [
      {
        guid: 'firstGuid',
        title: 'firstTitle',
        description: '<p>firstDescription</p>'
      },
      {
        guid: 'secondGuid',
        title: 'secondTitle',
        description: '<p>secondDescription</p>'
      }
    ]
    wrapper = shallow(<RssFeed rssItems={rssItems} />)
  })

  it('renders a grid structure per item', () => {
    expect(wrapper.find('.grid')).to.have.length(2)
  })

  it('renders a cell per item', () => {
    expect(wrapper.find('.cell')).to.have.length(2)
  })

  it('renders two rssItems', () => {
    expect(wrapper.find('RssItem')).to.have.length(2)
  })

  it('adds the guid as a key on the grid', () => {
    const grids = wrapper.find('.grid')
    expect(grids.get(0).key).to.equal('firstGuid')
    expect(grids.get(1).key).to.equal('secondGuid')
  })

  it('transfer each rssItems properties to rssItem component', () => {
    const rssItemComponents = wrapper.find('RssItem')
    expect(rssItemComponents.at(0).props().title).to.equal('firstTitle')
    expect(rssItemComponents.at(0).props().description).to.equal('<p>firstDescription</p>')
    expect(rssItemComponents.at(1).props().title).to.equal('secondTitle')
    expect(rssItemComponents.at(1).props().description).to.equal('<p>secondDescription</p>')
  })
})
