import React, { Component } from 'react'
import { Punchline, Title } from '../components'

class Hero extends Component {
  render() {
    return (
      <div id="hero-component">
        <div className="grid justify-content -around">
          <div className="cell -1of12" />
          <div className="cell -10of12">
            <Title text={this.props.title} />
          </div>
          <div className="cell -1of12" />
        </div>
        <div className="grid justify-content -around">
          <div className="cell -1of12" />
          <div className="cell -10of12">
            <Punchline text={this.props.punchline} />
          </div>
          <div className="cell -1of12" />
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
