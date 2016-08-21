import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <div id="title-component" className="grid">
        <div className="cell">
          { this.props.text }
        </div>
      </div>
    )
  }
}

Title.propTypes = {
  text: React.PropTypes.string
}

export default Title
