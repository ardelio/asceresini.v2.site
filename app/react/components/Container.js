import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
      <div id="container" className="container">
        <div className="grid justify-content -around">
          <div className="cell">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  children: React.PropTypes.array
}

export default Container
