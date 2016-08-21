import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RssItem } from '../components'

export const RssFeed = props => (
  <div id="rss-feed-component">
    {props.rssItems.map(item => {
      return (
        <div className="grid justify-content -around" key={item.guid}>
          <div className="cell -10of12">
            <RssItem
              url={item.guid}
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
