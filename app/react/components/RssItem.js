import React, { Component } from 'react'

function createMarkup(html) { return {__html: html}; };
<div  />

class RssItem extends Component {
  render() {
    return (
      <div className="rss-item-component card">
        <header className="card-header">{ this.props.title }</header>
        <div className="card-content">
          <div className="inner" dangerouslySetInnerHTML={createMarkup(this.props.description)} />
        </div>
      </div>
    )
  }
}

RssItem.propTypes = {
  description: React.PropTypes.string,
  title: React.PropTypes.string
}

export default RssItem
