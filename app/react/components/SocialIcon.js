import React, { Component } from 'react'

class SocialIcon extends Component {
  render() {
    return (
      <div id="social-icon-component" className="grid justify-content -around">
        <div className="cell -12of12">
          <a href={ this.props.url } target="_blank">
            <img src={ this.props.src } alt={ this.props.alt } />
          </a>
        </div>
      </div>
    )
  }
}

SocialIcon.propTypes = {
  alt: React.PropTypes.string,
  src: React.PropTypes.string,
  url: React.PropTypes.string
}

export default SocialIcon
