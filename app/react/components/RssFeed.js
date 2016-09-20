import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RssItem } from '../components'

export const RssFeed = props => (
  <div id="rss-feed-component">
    <h1>Things I do. Stuff I've said.</h1>
    {props.rssItems.map(item => {
      return (
        <div className="grid" key={item.guid}>
          <div className="cell">
            <RssItem
              title={item.title}
              description={item.description} />
          </div>
        </div>
    )})}
  </div>
)

RssFeed.propTypes = {
  rssItems: React.PropTypes.array
}

export default connect(
  state => ({ rssItems: state.rssFeed.items })
)(RssFeed)
