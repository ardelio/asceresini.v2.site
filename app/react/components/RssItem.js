import React, { Component } from 'react'

class RssItem extends Component {
  render() {
    return (
      <div className="rss-item-component card">
        <header className="card-header">
          <a href={ this.props.url } target="_blank">{ this.props.title }</a>
        </header>
        <div className="card-content">
          <div className="inner">{ this.props.description }</div>
        </div>
      </div>
    )
  }
}

RssItem.propTypes = {
  description: React.PropTypes.string,
  title: React.PropTypes.string,
  url: React.PropTypes.string
}

export default RssItem
