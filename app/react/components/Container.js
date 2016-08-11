import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
      <div id="container" className="container">
        { this.props.children }
      </div>
    )
  }
}

Container.propTypes = {
  children: React.PropTypes.array
}

export default Container
