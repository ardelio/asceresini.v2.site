import React, { Component } from 'react'

class Punchline extends Component {
  render() {
    return (
      <div id="punchline-component" className="grid">
        <div className="cell">
          { this.props.text }
        </div>
      </div>
    )
  }
}

Punchline.propTypes = {
  text: React.PropTypes.string
}

export default Punchline
