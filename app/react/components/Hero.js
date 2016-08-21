import React, { Component } from 'react'
import { Punchline, Title } from '../components'

class Hero extends Component {
  render() {
    return (
      <div id="hero-component">
        <div className="grid">
          <div className="cell">
            <Title text={this.props.title} />
          </div>
        </div>
        <div className="grid">
          <div className="cell">
            <Punchline text={this.props.punchline} />
          </div>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  title: React.PropTypes.string,
  punchline: React.PropTypes.string
}

export default Hero
