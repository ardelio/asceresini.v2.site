import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <div id="title-component" className="grid justify-content -around">
        <div className="cell -12of12">
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
