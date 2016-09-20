import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import { RssItem } from '../../../app/react/components'

describe('<RssItem />', () => {
  let wrapper = null

  beforeEach(() => {
    const title = 'aTitle'
    const description = '<p>aDescription</p>'
    wrapper = shallow(<RssItem title={title} description={description} />)
  })

  it('renders the title', () => {
    expect(wrapper.contains('aTitle')).to.equal(true)
  })

  it('renders the description as html', () => {
    expect(wrapper.html()).to.contain('<p>aDescription</p>')
  })
})
