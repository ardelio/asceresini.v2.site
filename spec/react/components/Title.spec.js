import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { Title } from '../../../app/react/components'

describe('<Title />', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallow(<Title text="someText" />)
  })

  it('renders a grid structure', () => {
    expect(wrapper.find('.grid')).to.have.length(1)
  })

  it('renders a cell', () => {
    expect(wrapper.find('.cell')).to.have.length(1)
  })

  it('renders the text prop', () => {
    expect(wrapper.contains('someText')).to.equal(true)
  })
})
